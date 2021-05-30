import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/constants/constants';
import { Menu } from 'src/app/models/menu';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  menuLeves1 : Menu[] = [];
  menuLeves2 :  Menu[] = [];

  


  constructor(private http: HttpClient) { }
   getMenuList() {
    //return this.http.get<Menu[]>(Constants.serverApi + `privilege/menu-list?type=menu&lang=` + lang, { responseType: 'json' });
    
    const menu101:Menu = {'menuSeq':'1001','menuId':'M10001','menuName':'User Management','level':'1','url':''};
    const menu102:Menu = {'menuSeq':'1002','menuId':'M10002','menuName':'Template Management','level':'1','url':''};
    const menu103:Menu = {'menuSeq':'1003','menuId':'M10003','menuName':'Mail Management','level':'1','url':''};
    const menu104:Menu = {'menuSeq':'1004','menuId':'M10004','menuName':'Send Mail','level':'1','url':'send_mail'};
    const menu105:Menu = {'menuSeq':'1005','menuId':'M10005','menuName':'Manage attachments','level':'1','url':'attachments_management'};
    //
    const menu211:Menu = {'menuSeq':'1011','menuId':'M10011','parentMenu':'M10001','menuName':'Create Request','level':'2','url':'user-management/create-request'};
    const menu212:Menu = {'menuSeq':'1012','menuId':'M10012','parentMenu':'M10001','menuName':'Assignment','level':'2','url':'user-management/user-assignment'};
    const menu213:Menu = {'menuSeq':'1013','menuId':'M10013','parentMenu':'M10001','menuName':'Request Approval','level':'2','url':'request_approval'};
    const menu214:Menu = {'menuSeq':'1014','menuId':'M10014','parentMenu':'M10001','menuName':'Search','level':'2','url':'user_search'};
    //'parentMenu':'1001',
    const menu221:Menu = {'menuSeq':'1021','menuId':'M10021','parentMenu':'M10002','menuName':'Search Template','level':'2','url':'template_search'};
    const menu222:Menu = {'menuSeq':'1022','menuId':'M10022','parentMenu':'M10002','menuName':'Create Template','level':'2','url':'template_crud'};
    //
    const menu231:Menu = {'menuSeq':'1031','menuId':'M10031','parentMenu':'M10003','menuName':'Search Mail','level':'2','url':'mail_search'};
    const menu232:Menu = {'menuSeq':'1032','menuId':'M10032','parentMenu':'M10003','menuName':'Blocked Mails','level':'2','url':'blocked_mails'};

    return [menu101,menu102,menu103,menu104,menu105,menu211,menu212,menu213,menu214,menu221,menu222,menu231,menu232 ];
   //Dummy menu 1
    //this.menuLeves1 = [menu101,menu102,menu103,menu104,menu105];
    //Dummy menu 2
    //this.menuLeves2 = [menu211,menu212,menu213,menu214,menu221,menu222,menu231,menu232];
  }
}
