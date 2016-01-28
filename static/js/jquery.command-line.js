/**
 * Tabs
 *
 * @author Richard McCartney <richard.mccartney@canonical.com>
 */

$(document).ready(function(){
    $('.command-line').each(function() {
      var self = $(this),
          copyButton = self.find('.js-copy-to-clipboard'),
          commandInput = self.find('.command-line__input');

      if (copyButton && commandInput) {
        copyButton.on('click', function(e) {
          e.preventDefault;
          commandInput.select();

          try {
              var successful = document.execCommand('copy');
              self.addClass('is-copied');
              setTimeout(function(e) {
                  self.removeClass('is-copied');
              }, 300);
          }
          catch(err) {
              console.log('Unable to copy');
          }
        });
      }

      if (commandInput) {
          commandInput.on('click', function(e) {
              this.select();
          });
      }
    });
});
