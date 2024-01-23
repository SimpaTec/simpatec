frappe.ui.form.on('Sales Order', {
    refresh(frm) {
        $('[data-doctype="Software Maintenance"]').find("button").hide();
        if (['First Sale', 'RTO', 'Subscription Annual'].includes(frm.doc.sales_order_type) && frm.doc.docstatus == 1 && !frm.doc.software_maintenance) {
            frm.add_custom_button('Software Maintenance', function () { 
                frappe.model.open_mapped_doc({
                    method: "simpatec.events.sales_order.make_software_maintenance",
        			frm: frm
        		})                
            }, __("Create"));
        }
    }
})