/**
 * Mobile footer navigation
 *
 * @author Richard McCartney <richard.mccartney@canonical.com>
 */

$(document).ready(function() {
    $('.footer__title').each(function() {
        var self = $(this);
        
        self.on('click', function() {
          self.toggleClass('open');
        });
    });
});
