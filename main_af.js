$(document).ready(function () {
  const ADD_NEW_FRIENDS = 'ADD_NEW_FRIENDS';
  const ADD_FRIENDS_RUNNING = 'SF_ADD_FRIENDS_RUNNING';
  const ADD_FRIENDS_COUNTER = 'SF_ADDED_FRIENDS_COUNTER';
  const ADDED_A_FRIEND = 'ADDED_A_FRIEND';
  const CANCEL_ADD_NEW_FRIENDS = 'CANCEL_ADD_NEW_FRIENDS';
  const COOKIE_URL = 'https://simplefriend.asia';

  $("#auto_scroll").on('change', function (e) {
    if ($(this).prop('checked')) {
      $("#scroll_delay").attr('disabled', false);
    } else {
      $("#scroll_delay").attr('disabled', true);
    }
  });

  $("#limit_request").on('change', function (e) {
    if ($(this).prop('checked')) {
      $("#request_delay").attr('disabled', false);
      $("#limit_amount").attr('disabled', false);
    } else {
      $("#request_delay").attr('disabled', true);
      $("#limit_amount").attr('disabled', true);
    }
  });

  loadParameters();

  chrome.cookies.get({
    url: COOKIE_URL,
    name: ADD_FRIENDS_RUNNING
  }, function(cookie) {
    if (cookie && cookie.value === '1') {
      toggleActionButton('add_friends');
    }
  });
  chrome.cookies.get({
    url: COOKIE_URL,
    name: ADD_FRIENDS_COUNTER
  }, function(cookie) {
    if (cookie) {
      resetCounterDisplay(parseInt(cookie.value));
    }
  });

  function saveParameters() {
    chrome.cookies.set({
      url: COOKIE_URL,
      name: 'SF_ADD_DELAYS',
      value: $("#add_friend_delay").val().toString(),
    });
    chrome.cookies.set({
      url: COOKIE_URL,
      name: 'SF_SCROLL_DELAYS',
      value: $("#scroll_delay").val().toString(),
    });
    chrome.cookies.set({
      url: COOKIE_URL,
      name: 'SF_IS_SCROLL',
      value: $("#auto_scroll").prop('checked').toString(),
    });
    chrome.cookies.set({
      url: COOKIE_URL,
      name: 'SF_IS_LIMIT',
      value: $("#limit_request").prop('checked').toString(),
    });
    chrome.cookies.set({
      url: COOKIE_URL,
      name: 'SF_LIMIT_AMOUNT',
      value: $("#limit_amount").val().toString(),
    });
    chrome.cookies.set({
      url: COOKIE_URL,
      name: 'SF_REQUEST_DELAY',
      value: $("#request_delay").val().toString(),
    });
  }

  function loadParameters() {
    chrome.cookies.get({
      url: COOKIE_URL,
      name: 'SF_ADD_DELAYS'
    }, function(cookie) {
      if (cookie && cookie.value) {
        $("#add_friend_delay").val(parseInt(cookie.value));
      }
    });
    chrome.cookies.get({
      url: COOKIE_URL,
      name: 'SF_SCROLL_DELAYS'
    }, function(cookie) {
      if (cookie && cookie.value) {
        $("#scroll_delay").val(parseInt(cookie.value));
      }
    });
    chrome.cookies.get({
      url: COOKIE_URL,
      name: 'SF_IS_SCROLL'
    }, function(cookie) {
      if (cookie && cookie.value) {
        $("#auto_scroll").prop('checked', cookie.value === 'true');
      }
    });
    chrome.cookies.get({
      url: COOKIE_URL,
      name: 'SF_IS_LIMIT'
    }, function(cookie) {
      if (cookie && cookie.value) {
        $("#limit_request").prop('checked', cookie.value === 'true');
      }
    });
    chrome.cookies.get({
      url: COOKIE_URL,
      name: 'SF_LIMIT_AMOUNT'
    }, function(cookie) {
      if (cookie && cookie.value) {
        $("#limit_amount").val(parseInt(cookie.value));
      }
    });
    chrome.cookies.get({
      url: COOKIE_URL,
      name: 'SF_REQUEST_DELAY'
    }, function(cookie) {
      if (cookie && cookie.value) {
        $("#request_delay").val(parseInt(cookie.value));
      }
    });
  }

  function getCurrentAddedFriends() {
    return parseInt($("#add_friend_counter").text());
  }

  function resetCounterDisplay(value) {
    $("#add_friend_counter").text(value);
  }

  function setCookieCounter(value) {
    chrome.cookies.set({
      url: COOKIE_URL,
      name: ADD_FRIENDS_COUNTER,
      value: value.toString()
    })
  }

  function setRunningStatus(status) {
    chrome.cookies.set({
      url: COOKIE_URL,
      name: ADD_FRIENDS_RUNNING,
      value: status.toString()
    })
  }

  function setRunningStop() {
    setRunningStatus(0);
  }

  function setRunningStart() {
    setRunningStatus(1);
  }

  chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
      if (message.type === ADDED_A_FRIEND) {
        resetCounterDisplay(getCurrentAddedFriends() + 1);
        setCookieCounter(getCurrentAddedFriends() + 1);
      }
    });
  
  function toggleActionButton(type) {
    if ($("#start_" + type).hasClass('hidden')) {
      $("#stop_" + type).addClass('hidden');
      $("#start_" + type).removeClass('hidden');
    } else {
      $("#start_" + type).addClass('hidden');
      $("#stop_" + type).removeClass('hidden');
    }
  }

  $("#start_add_friends").on('click', function (e) {
    toggleActionButton("add_friends");
    chrome.storage.local.set({
      ADD_NEW_FRIENDS: { 
        addDelays: parseInt($("#add_friend_delay").val()) * 1000,
        isScroll: !!$("#auto_scroll").prop('checked'),
        scrollDelays: parseInt($("#scroll_delay").val()) * 1000,
        isLimit: !!($("#limit_request").prop('checked')),
        limitAmount: parseInt($("#limit_amount").val()),
        requestDelays: parseInt($("#request_delay").val()) * 1000,
        extensionId: chrome.runtime.id,
      },
      CANCEL_ADD_NEW_FRIENDS: false,
    }, () => {
      saveParameters();
      setRunningStart();
      resetCounterDisplay(0);
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: 'js/add_friends.js'},
            (results) => {
              if (results[0]) {
                setRunningStop();
                setCookieCounter(0);
                toggleActionButton("add_friends");
              }
            }
        );
      });
    });
  });

  $("#stop_add_friends").on('click', function (e) {
    toggleActionButton("add_friends");
    chrome.storage.local.set({
      CANCEL_ADD_NEW_FRIENDS: true
    });
    setRunningStop();
    setCookieCounter(0);
  });
});
