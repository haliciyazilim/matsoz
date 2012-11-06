/**
 * Created with JetBrains WebStorm.
 * User: yeguzel
 * Date: 06.11.2012
 * Time: 10:27
 * To change this template use File | Settings | File Templates.
 */
var Dialog = Class.extend({
    init:function(opt){
        this.id = Dialog.GetId();
        var dialog_box = document.createElement('div');
        dialog_box.id = 'dialog_box';
        dialog_box.dialog = this;
        dialog_box.className = 'dialoggolge';
        dialog_box.setAttribute('DialogId',this.id);
        document.body.appendChild(dialog_box);

        var dialog_title = document.createElement('div');
        dialog_title.className = 'dialog_title';
        dialog_box.appendChild(dialog_title);

        var dialog_content = document.createElement('div');
        dialog_content.className = dialog_content;
        dialog_box.appendChild(dialog_content);

        this.dialog_title  = dialog_title;
        this.dialog_box = dialog_box;
        this.dialog_content = dialog_content;

        if(opt.title)
            this.setTitle(opt.title);
        if(opt.content)
            this.setContent(opt.content);

        this.hide();

    },
    setContent:function(content){
        this.dialog_content.innerHTML = content;
    },
    setTitle:function(title){
        this.dialog_title.innerHTML = title + ' <div style="float:right;"><a href="#" onclick="Dialog.CloseDialogWithId('+this.id+')"><img src="/assets/theme/blue/ui_img/cancel.png" alt="Kapat"></a></div>';
    },
    show:function(){
        this.dialog_box.style.display = 'block';
    },
    hide:function(){
        this.dialog_box.style.display = 'none';
    }
});

Dialog.GetId = function(){
    if(Dialog.__currentId)
        Dialog.currentId = 1;
    return Dialog.currentId++;
};

Dialog.CloseDialogWithId = function(id){
    $('*[DialogId="'+id+'"]').get(0).dialog.hide();
}

