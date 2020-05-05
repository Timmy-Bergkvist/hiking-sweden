
// Click function that will display and hide the chosen links.

function changeTab(tab) {
  if (tab === 'search') {
    $('#search').show();
  } else {
    $('#search').hide();
  }
  if (tab === 'contact') {
    $('#contact').show();
  } else {
    $('#contact').hide();
  }
  if (tab === 'notes') {
    $('#notes').show();
  } else {
    $('#notes').hide();
  }
}