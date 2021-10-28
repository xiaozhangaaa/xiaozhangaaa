alert("nihao photsshop");

var samp = new Folder("C:/Users/Administrator/Desktop/aaa");
var filelist = samp.getFiles("*.jpg");
var a=
		{
			"asasdf":"asfsadsaas"
		}
var b={
	asfa:function(){
		alert("止住");
	}
}
for(var i= 0 ; i<filelist.length;i++){
	if(filelist[i] instanceof File){
		open(filelist[i]);
		//app.document.saveAs(filelist[i],Option,ascopu,extensiontype)
		app.activeDocument.activeLayer.alpha = 80;
		//app.activeDocument.selection.feather(10);
		alert(a.asasdf);
		b.asfa();
		
		var fileOut= new File("C:/Users/Administrator/Desktop/aaa/a.png");
		var options=PNGSaveOptions;
		var extensionType = Extension.LOWERCASE;
		document.saveAs(fileOut,options,true,extensionType)
		//app.activeDocument.close(SaveOp;tions.SAVECHANGES);
		//app.activeDocument.close(psSaveChanges);
	}
}
//var doc = app.activeDocument;
//open(File("C:/Users/Administrator/Desktop/aaa"+"/1.JPG"))
//alert(app.path);