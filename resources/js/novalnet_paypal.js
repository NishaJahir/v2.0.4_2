var $ = jQuery.noConflict();

$(document).ready( function() {
	
	$('#nn_paypal_form').on('submit', function() {
		$('#novalnet_form_btn').attr('disabled',true);
	});
	
	$('#savepayment').click(function() {
        if (!$('#savepayment').is(':checked')) {
            $('#save_payment').val('');
        } else {
            $('#save_payment').val('1');
        }
	});
	
	$('#nn_toggle_form').on('click',function(){
		if ($('#nn_new_card_details').css('display') == 'none'){
			$('#nn_new_card_details').show();
			$('#save_payment_block').show();
			$('#nn_saved_details').hide();
			$('#nn_new_details').val('1');
			$('#nn_toggle_form').html($('#nn_account_display_text_saved').val());
		}else{
			$('#nn_new_card_details').hide();
			$('#save_payment_block').hide();
			$('#nn_saved_details').show();
			$('#nn_new_details').val('0');
			$('#nn_toggle_form').html($('#nn_account_display_text_new').val());
		}
			
	});
	
});

