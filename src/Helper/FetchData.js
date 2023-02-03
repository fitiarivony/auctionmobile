import URLHelper from "./URLHelper";

class FetchData{
    geturl(){
        return this.url;
    }
    seturl(url){
        this.url = url;
    }
    setmethod(methode){
        this.method = methode;
    }
    getmethod(){
        return this.method;
    }
    getdata(){
        return this.data;
    }
    setdata(data){
        this.data =data;
    }

    constructor(url,method,data={}) {
        this.seturl(url);
        this.setmethod(method);
        this.setdata(data);
    }

    async dopost(headers={
  "Content-type": "application/json; charset=UTF-8"
    }){
        // main.js

    // POST request using fetch()
       const response=await fetch(URLHelper.urlgen(this.geturl()), {
        
            // Adding method type
            method: this.getmethod(),
            
            // Adding body or contents to send
            body: JSON.stringify(this.getdata()),
            
            // Adding headers to the request
            headers: headers
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
     async doget (){
        console.log(this.geturl());
        const response=await fetch(this.geturl(),
         {
             crossDomain:true,
             method:'GET',
             headers:{}
         })
         if (!response.ok) {
             throw new Error(`HTTP error! status: ${response.status}`);
         }
         const data = await response.json();
       
         console.log(data);
         return  data;
     }

}
export default FetchData;
