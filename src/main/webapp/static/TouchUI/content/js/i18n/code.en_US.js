(function($){
	if(!$) return;
	$.lang.extend({
		"ui.page.loading": "Loading...",

		"ui.nav.notnull": " parameter cannot be null and must be string.",
		"ui.nav.navobj": "Feature Navigator adapter object must be a JSON Object.",
		"ui.nav.navimp": "Feature Navigator adapter object must implement {1} method",
		"ui.nav.init": "Initialization Navigation:",
		"ui.nav.open": "Open Interface:",
		"ui.nav.openLock": "Open the lock screen:",
		"ui.nav.openByUrl": "Open interface from URL:",
		"ui.nav.redirect": "Jump current interface:",
		"ui.nav.redirectByUrl": "Jump interface from URL:",
		"ui.nav.reload": "Overload current interface:",
		"ui.nav.getData": "Get the current interface navigation-related information:",
		"ui.nav.getDataByTitle": "According to title obtain relevant interface navigation information:",
		"ui.nav.getTitle": "Get the current interface window title:",
		"ui.nav.getContentWindow": "Get the current interface window:",
		"ui.nav.getContentWindowByTitle": "Get the page window by title:",
		"ui.nav.switchByTitle": "According to Title switch interface:",
		"ui.nav.close": "Close the currently active interface:",
		"ui.nav.closeByTitle": "Close interface by title:",

		"ui.validate.pspt1": "ID number cannot be null.",
		"ui.validate.pspt2": "Verification passed!",
		"ui.validate.pspt3": "Invaild identification digit.",
		"ui.validate.pspt4": "Invalid identification number.",
		"ui.validate.pspt5": "Identification number verification error.",
		"ui.validate.pspt6": "Invalid region on identification card.",
		"ui.validate.pspt7": "Invalid Birthday on identification card, continue ?",
		"ui.validate.nopass": "Verification not pass!",
		"ui.validate.desc1": "Attribute \"desc\" cannot be null.",
		"ui.validate.desc2": " is mandatory!",
		"ui.validate.desc3": " cannot be null.",
		"ui.validate.length1": "{1} length must be {2}.",
		"ui.validate.length2": "{1} min length cannot be less than {2}.",
		"ui.validate.length3": "{1} max length cannot exceed {2} chars.",
		"ui.validate.int1": " must be integer.",
		"ui.validate.int2": " must be an integer greater than 0!",
		"ui.validate.int3": " must be an integer less than 0!",
		"ui.validate.int4": " must be digit!",
		"ui.validate.int5": " must be an integer greater than or equal to 0!",
		"ui.validate.date1": "{1}:date is illegal or invalid format {2}!",
		"ui.validate.date2": "{1} cannot be less than {2}.",
		"ui.validate.date3": "{1} cannot be greater than {2}.",
		"ui.validate.number9": "{1} cannot be less than {2}.",
		"ui.validate.number10": "{1} cannot be greater than {2}.",
		"ui.validate.email": " must be the Email address format!",
		"ui.validate.filetype": "{1} must be of specified file type of {2}!",
		"ui.validate.phone": " must be the mobile phone number format!",
		"ui.validate.ip": " must be the IP address format!",
		"ui.validate.numchar1": " must be combination of digits and letters!",
		"ui.validate.numchar2": " must be combination of digits and capitalized letters!",
		"ui.validate.numchar3": " must be combination of digits and lowercase letters!",
		"ui.validate.numchar4": " cannot contain comma, quote and other special punctuation.",
		"ui.validate.money": "must be the money format",
		"ui.validate.choose": "Please select the target record!",

		"ui.public.printArea.label.fontresize": "Font Resize",
		"ui.public.printArea.button.close": "Close",
		"ui.public.printArea.button.print": "Print",

		"ui.component.messagebox.buttontext.ok": "Ok",
		"ui.component.messagebox.buttontext.cancel": "Cancel",
		"ui.component.messagebox.buttontext.ext0": "ExtButton0",
		"ui.component.messagebox.buttontext.ext1": "ExtButton1",
		"ui.component.messagebox.buttontext.ext2": "ExtButton2",
		"ui.component.messagebox.buttontext.report": "Report Error",   
		"ui.component.messagebox.buttontext.select-all": "Select All", 
		"ui.component.messagebox.report.errorid-label": "ErrorID",
		"ui.component.messagebox.report.loading": "Reporting",
		"ui.component.messagebox.report.success": "Report Error Success",
		"ui.component.messagebox.report.error": "Report Error Faild",

		"ui.component.calendar.janurary-text": "Janurary",
		"ui.component.calendar.february-text": "February",
		"ui.component.calendar.march-text": "March",
		"ui.component.calendar.april-text": "April",
		"ui.component.calendar.may-text": "May",
		"ui.component.calendar.june-text": "June",
		"ui.component.calendar.july-text": "July",
		"ui.component.calendar.august-text": "August",
		"ui.component.calendar.september-text": "September",
		"ui.component.calendar.october-text": "October",
		"ui.component.calendar.november-text": "November",
		"ui.component.calendar.december-text": "December",
		"ui.component.calendar.monday-text": "MON",
		"ui.component.calendar.tuesday-text": "TUE",
		"ui.component.calendar.wednesday-text": "WED",
		"ui.component.calendar.thursday-text": "THU",
		"ui.component.calendar.friday-text": "FRI",
		"ui.component.calendar.saturday-text": "SAT",
		"ui.component.calendar.sunday-text": "SUN",
		"ui.component.calendar.hour-text": "Hour",
		"ui.component.calendar.minutes-text": "Minutes",
		"ui.component.calendar.second-text": "Second",
		"ui.component.calendar.btn-cancel-text": "Cancel",
		"ui.component.calendar.btn-ok-text": "Ok",
		"ui.component.calendar.btn-clear-text": "Clear",
		"ui.component.calendar.btn-today-text": "Today",
		"ui.component.calendar.btn-quicksel-text": "Quick Select",
		"ui.component.calendar.quicksel-btn-hyaday-text" : "Half Year Ago",
		"ui.component.calendar.quicksel-btn-tmaday-text" : "Three Month Ago",
		"ui.component.calendar.quicksel-btn-pmtday-text" : "Privous Month Today",
		"ui.component.calendar.quicksel-btn-today-text" : "Today",
		"ui.component.calendar.quicksel-btn-nmfday-text" : "Next Month First",
		"ui.component.calendar.quicksel-btn-nmlday-text" : "Next Month Last",
		"ui.component.calendar.quicksel-btn-nytday-text" : "Next Year Today",
		"ui.component.calendar.quicksel-btn-2050day-text" : "2050",

		"ui.component.select.default-text": "--Please select--",
		"ui.component.select.textinput-placeholder": "Please Enter Keyword Or Select",
		"ui.component.select.tip.nonematch": "None Match Item",
		
		"ui.component.table.contextmenu.copy-td": "Copy Td",
		"ui.component.table.contextmenu.copy-row": "Copy Row",
		"ui.component.table.contextmenu.copy-cell": "Copy Cell",
		
		"ui.component.tabset.unamed.tab": "Unamed Tab",
		
		"ui.component.import.tip.support-filetypes": "Support file types：{1}.",
		"ui.component.import.tip.tpldownload": "Template Download",
		"ui.component.import.tip.invalid-filetype": "Invalid File Type!",
		"ui.component.import.tip.invalid-filesize": "Invalid File Size!",
		"ui.component.import.tip.begin-upload": "Begin Upload: {1}",
		"ui.component.import.tip.uploading": "(Uploading {1}%) {2}",
		"ui.component.import.tip.upload-complete": "Upload complete, please import",
		"ui.component.import.tip.upload-faild-status": "Upload Faild, Stataus： {1}",
		"ui.component.import.tip.upload-faild-info": "Upload Faild: {1}",
		"ui.component.import.tip.begin-import": "(Begin Import) {1}",
		"ui.component.import.tip.import-started": "Task started，waiting status return...",
		"ui.component.import.tip.importing": "(Importing {1}) {2}",
		"ui.component.import.tip.import-faild": "Import Faild，Stataus： {1}",
		"ui.component.import.tip.import-complete": "Complete",
		"ui.component.import.tip.import-count": "Success:{1}，Faild:{2}",
		"ui.component.import.tip.faild-data-download": "Download Filad Dataset",
		
		"ui.component.simpleimport.tip.tpldownload": "Template Download",
		"ui.component.simpleimport.tip.support-filetypes": "Support file types：{1}",
		"ui.component.simpleimport.tip.invalid-filetype": "Invalid File Type!",
		"ui.component.simpleimport.tip.invalid-filesize": "Invalid File Size!",
		"ui.component.simpleimport.tip.uploading": "(Uploading {1}%) {2}",
		"ui.component.simpleimport.tip.upload-faild-status": "Upload Faild, Stataus： {1}",
		"ui.component.simpleimport.tip.upload-faild-info": "Upload Faild: {1}",
		"ui.component.simpleimport.tip.begin-import": "(Begin Import) {1}",
		"ui.component.simpleimport.tip.import-started": "Task started，waiting status return...",
		"ui.component.simpleimport.tip.importing": "(Importing {1}) {2}",
		"ui.component.simpleimport.tip.import-faild": "Import Faild，Stataus： {1}",
		"ui.component.simpleimport.tip.import-complete": "Complete",
		"ui.component.simpleimport.tip.import-count": "Success:{1}，Faild:{2}",
		"ui.component.simpleimport.tip.faild-data-download": "Download Filad Dataset",
		
		"ui.component.export.tip.input-filename": "Please input or modify filename",
		"ui.component.export.tip.export-file-download": "Download Exported File",
		"ui.component.export.tip.invalid-filename": "Invalid File Name",
		"ui.component.export.tip.begin-export": "(Begin Export) {1}",
		"ui.component.export.tip.export-started": "Task started，waiting status return...",
		"ui.component.export.tip.exporting": "(Exporting {1}) {2}",
		"ui.component.export.tip.export-complete": "Complete",
		"ui.component.export.tip.export-faild": "Export Faild，Stataus： {1}",
		
		"ui.component.simpleexport.tip.export-file-download": "Download Exported File",
		"ui.component.simpleexport.tip.invalid-filename": "Invalid File Name",
		"ui.component.simpleexport.tip.begin-export": "(Begin Export) {1}",
		"ui.component.simpleexport.tip.export-started": "Task started，waiting status return...",
		"ui.component.simpleexport.tip.exporting": "(Exporting {1}) {2}",
		"ui.component.simpleexport.tip.export-complete": "Complete",
		"ui.component.simpleexport.tip.export-faild": "Export Faild，Stataus： {1}",
		
		"ui.component.navbar.tip.msg-title": "NavBar Component",
		"ui.component.navbar.tip.turn-page-error": "Turn page query error",
		"ui.component.navbar.tip.part-not-contain": "Refresh Part \"{1}\" is not contains this NavBar \"{2}\"",
		"ui.component.navbar.tip.error-info": "Error Code:{1}<br />Error Info:{2}",
		
		"ui.component.tree.tip.msg-title": "Tree Component",
		"ui.component.tree.tip.invalid-parameter": "None value in the \"{1}\" Tree component parameters \"clazz、method、listener and component\"",
		"ui.component.tree.tip.node-loading-uncompleted": "This Tree Componennt has uncompleted loading node",
		"ui.component.tree.tip.childnode-no-data": "Childnode has no data",
		"ui.component.tree.tip.invalid-expandpath": "Invalid expand path",
		
		"ui.component.simpleupload.tip.re-upload": "ReUpload",
		"ui.component.simpleupload.tip.download-uploaded-file": "Download uploaded file",
		"ui.component.simpleupload.tip.file-size-limit": "File size limit:{1}",
		"ui.component.simpleupload.tip.file-type-limit": "File type limit:({1})",
		"ui.component.simpleupload.tip.invalid-filetype": "Invalid File Type!",
		"ui.component.simpleupload.tip.invalid-filesize": "Invalid File Size!",
		"ui.component.simpleupload.tip.loading-file": "Loading file info...",
		"ui.component.simpleupload.tip.load-file-faild": "Load file info faild",
		"ui.component.simpleupload.tip.upload-faild-status": "Upload Faild, Status:{1}",
		"ui.component.simpleupload.tip.upload-faild-info": "Upload Faild:{1}",
		
		"ui.component.upload.tip.file-size-limit": "File size limit：{1}",
		"ui.component.upload.tip.file-num-limit": ",File num limit：{1}",
		"ui.component.upload.tip.file-type-limit": ",File type limit：({1})",
		"ui.component.upload.tip.selected-file-num": "Selected ({1}) file",
		"ui.component.upload.tip.selected-invalid-file-num": ",Invalid Selected file:{1}",
		"ui.component.upload.tip.invalid-filetype": "Invalid File Type!",
		"ui.component.upload.tip.invalid-filesize": "Invalid File Size!",
		"ui.component.upload.tip.tag-wait": "Waiting",
		"ui.component.upload.tip.tag-complete": "Complete",
		"ui.component.upload.tip.tag-uploaded": "Uploaded",
		"ui.component.upload.tip.loading-files": "Loading files ...",
		"ui.component.upload.tip.loading-files-notfound": "Date not found by fileid[{1}]",
		"ui.component.upload.tip.loading-files-faild": "Load files faild",
		"ui.component.upload.tip.upload-faild": "Faild",
		"ui.component.upload.tip.upload-faild-status": "Upload Fiald, Status:{1}",
		"ui.component.upload.tip.upload-faild-info": "Upload Fiald:{1}",
		
		"ui.component.suggest.tip.msg-title": "Sggest Component",
		"ui.component.suggest.tip.invalid-parameter": "None value in the \"{1}\" Suggest component parameters \"clazz、method、listener and component\"",
		
		"default": "undefined code"
	});
})(window.Wade);	
