(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{CXQP:function(t,e,n){"use strict";n.r(e);var i=n("DUip"),o=n("QJY3"),r=n("ozzT"),s=n("7F1V"),c=n("TYT/"),b=n("9rNa"),u=n("Valr"),d=["f"];function a(t,e){if(1&t){var n=c.Nb();c.Mb(0,"button",13),c.Ub("click",(function(){return c.cc(n),c.Wb().onDelete()})),c.gc(1,"Delete"),c.Lb()}}var p=function(){function t(t){this.slService=t,this.editMode=!1}return t.prototype.ngOnInit=function(){var t=this;this.subscription=this.slService.startedEditing.subscribe((function(e){t.editedItemIndex=e,t.editMode=!0,t.editedItem=t.slService.getIngredient(e),t.slForm.setValue({name:t.editedItem.name,amount:t.editedItem.amount})}))},t.prototype.onSubmit=function(t){var e=t.value,n=new b.a(e.name,e.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,n):this.slService.addIngredient(n),this.editMode=!1,t.reset()},t.prototype.onClear=function(){this.slForm.reset(),this.editMode=!1},t.prototype.onDelete=function(){this.slService.deleteIngredient(this.editedItemIndex),this.onClear()},t.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},t.\u0275fac=function(e){return new(e||t)(c.Jb(r.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){var n;1&t&&c.kc(d,!0),2&t&&c.ac(n=c.Vb())&&(e.slForm=n.first)},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){if(1&t){var n=c.Nb();c.Mb(0,"div",0),c.Mb(1,"div",1),c.Mb(2,"form",2,3),c.Ub("ngSubmit",(function(){c.cc(n);var t=c.bc(3);return e.onSubmit(t)})),c.Mb(4,"div",0),c.Mb(5,"div",4),c.Mb(6,"label",5),c.gc(7,"Name"),c.Lb(),c.Kb(8,"input",6),c.Lb(),c.Mb(9,"div",7),c.Mb(10,"label",8),c.gc(11,"Amount"),c.Lb(),c.Kb(12,"input",9),c.Lb(),c.Lb(),c.Mb(13,"div",0),c.Mb(14,"div",1),c.Mb(15,"button",10),c.gc(16),c.Lb(),c.fc(17,a,2,0,"button",11),c.Mb(18,"button",12),c.Ub("click",(function(){return e.onClear()})),c.gc(19,"Clear"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&t){var i=c.bc(3);c.zb(15),c.Xb("disabled",!i.valid),c.zb(1),c.hc(e.editMode?"Update":"Add"),c.zb(1),c.Xb("ngIf",e.editMode)}},directives:[o.u,o.m,o.n,o.a,o.l,o.o,o.s,o.p,o.q,u.i],styles:[""]}),t}();function l(t,e){if(1&t){var n=c.Nb();c.Mb(0,"a",4),c.Ub("click",(function(){c.cc(n);var t=e.index;return c.Wb().onEditItem(t)})),c.gc(1),c.Lb()}if(2&t){var i=e.$implicit;c.zb(1),c.jc(" ",i.name," (",i.amount,") ")}}var m=function(){function t(t,e){this.slService=t,this.loggingService=e}return t.prototype.ngOnInit=function(){var t=this;this.ingredients=this.slService.getIngredients(),this.subscription=this.slService.ingredientsChanged.subscribe((function(e){t.ingredients=e})),this.loggingService.printLog("Hello from ShoppingListComponent ngOnInit!")},t.prototype.onEditItem=function(t){this.slService.startedEditing.next(t)},t.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},t.\u0275fac=function(e){return new(e||t)(c.Jb(r.a),c.Jb(s.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Kb(2,"app-shopping-edit"),c.Kb(3,"hr"),c.Mb(4,"ul",2),c.fc(5,l,2,2,"a",3),c.Lb(),c.Lb(),c.Lb()),2&t&&(c.zb(5),c.Xb("ngForOf",e.ingredients))},directives:[p,u.h],styles:[""]}),t}(),f=n("PCNd");n.d(e,"ShoppingListModule",(function(){return g}));var g=function(){function t(){}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[o.j,i.e.forChild([{path:"",component:m}]),f.a]]}),t}()}}]);