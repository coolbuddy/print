//Print script 

<script type="text/javascript">
      function printredirect() {

            $('.detailView').css({
                  "display": "block"
            });
            var divToPrint = document.getElementById('tourSegmentnew');

            var newWin = window.open('', 'Print-Window');

            newWin.document.open();
            newWin.document.write(
                  '<html><body onload="window.print()"><img src="/data/multimedia/s_images/Logo.png" width="16%" height="8%"><hr><br>');
            newWin.document.write(divToPrint.innerHTML + '<br> <br>');
            newWin.document.write('<h5>Contact us @ anoj.info</h5></body></html>');
            newWin.document.close();
            
            //timeout call
            setTimeout(function() {
                  newWin.close();
                  $('.detailView').css({
                        "display": "none"
                  });
            }, 10);
      }
</script>
