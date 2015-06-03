var inicio = function()
{
	
	var muestraActividades = function()
	{
		$("#section2").show("slow");
		$("#section0").show("fast");
		$("#section1").hide("fast");
	}
	var muestraAcerca = function()
	{
		$("#section1").show("slow");
		$("#section2").hide("fast");
		$("#section0").show("fast");
	}


	$("#btn_Acti").on("click", muestraActividades);
	$("#btn_acerca").on("click", muestraAcerca);
}
$(document).on("ready",inicio);