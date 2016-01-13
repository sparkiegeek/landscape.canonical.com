/**
 * Tabs
 *
 * @author Richard McCartney <richard.mccartney@canonical.com>
 */

jQuery(document).ready(function($) {

    var tab = $('.tab'),
        tabTarget = $('.tab-target');

    // Set the first tab to be active
    tab.eq(1).addClass('js-is-active');

    // Set the first tab content to be active
    tabTarget.hide();
    tabTarget.eq(1).show();

    tab.on('click', function() {
        tab.removeClass('js-is-active');
        $(this).addClass('js-is-active')

        tabTarget.hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});
