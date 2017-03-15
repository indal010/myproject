var obj1={"javabook":[{"topic":"oops"},{"topic":"method"},{"topic":"filehandeling"},{"topic":"collection"},{"topic":"switch"}]};
var obj2={"cppbook":[{"topic":"class"},{"topic":"method"},{"topic":"inheritance"},{"topic":"function"},{"topic":"switch"}]};
var obj3={"cbook":[{"topic":"procedure"},{"topic":"function"},{"topic":"filehandeling"},{"topic":"string"},{"topic":"switch"}]};
var obj4={"javascriptbook":[{"topic":"class"},{"topic":"function"},{"topic":"inheritance"},{"topic":"string"},{"topic":"switch"}]};

class Book
{
  constructor(name)
  {
    this.name=name;
  }
  displayTopic()
  {
    document.getElementById("demo1").innerHTML="";
      document.getElementById("demo").innerHTML="";
      document.getElementById("demo3").innerHTML="";
      var h=document.createElement("H3");
      h.textContent="topics of "+this.name+" is: "
    document.getElementById("demo").appendChild(h);
  }

}
function hello(value)
{
  document.getElementById("demo3").innerHTML="";
  var s="";
   for(var i=0;i<obj1.javabook.length;i++)
   {
     if(value==obj1.javabook[i].topic)
     {
       s+="java, ";
       break;
     }
   }
   for(var i=0;i<obj2.cppbook.length;i++)
   {
     if(value==obj2.cppbook[i].topic)
     {
       s+="c++, ";
       break;
     }
   }
   for(var i=0;i<obj3.cbook.length;i++)
   {
     if(value==obj3.cbook[i].topic)
     {
       s+="c, ";
       break;
     }
   }
   for(var i=0;i<obj4.javascriptbook.length;i++)
   {
     if(value==obj4.javascriptbook[i].topic)
     {
       s+="javascript";
       break;
     }
   }
    if(s=="")
   document.getElementById("demo3").innerHTML="not present in any book";
   else {
       if(s.charAt(s.length-1)==' ')
         s=s.substr(0,s.length-2);
     document.getElementById("demo3").innerHTML=s;
   }
}
class Java extends Book
{
    displayTopic()
    {

      super.displayTopic();
      //document.getElementById("demo3").innerHTML="";
        for(var i=0;i<obj1.javabook.length;i++)
         {
           var anch=document.createElement('a');
           var str=obj1.javabook[i].topic;
           anch.textContent=str;
           anch.setAttribute("href",'javascript:hello("'+str+'")');
           var p1=document.createElement("P");
           p1.appendChild(anch);
           document.getElementById("demo1").appendChild(p1);
           }
    }
}

function myjava()
{
  var j=new Java("java");
  j.displayTopic();
}

class Cpp extends Book
{
    displayTopic()
    {
        super.displayTopic();
        //document.getElementById("demo3").innerHTML="";
        for(var i=0;i<obj2.cppbook.length;i++)
         {
           var anch=document.createElement('a');
           var str=obj2.cppbook[i].topic;
           anch.textContent=str;
           anch.setAttribute("href",'javascript:hello("'+str+'")');
           var p1=document.createElement("P");
           p1.appendChild(anch);
           document.getElementById("demo1").appendChild(p1);
           }
    }
}

function mycpp()
{
  var j=new Cpp("c++");
  j.displayTopic();
}

class C extends Book
{
    displayTopic()
    {
      super.displayTopic();
        for(var i=0;i<obj3.cbook.length;i++)
         {

           var anch=document.createElement('a');
           var str=obj3.cbook[i].topic;
           anch.textContent=str;
           anch.setAttribute("href",'javascript:hello("'+str+'")');
           var p1=document.createElement("P");
           p1.appendChild(anch);
           document.getElementById("demo1").appendChild(p1);
           }
    }
}

function myc()
{
  var j=new C("c ");
  j.displayTopic();
}

class Javascript extends Book
{
    displayTopic()
    {
        super.displayTopic();
        for(var i=0;i<obj4.javascriptbook.length;i++)
         {
           var anch=document.createElement('a');
           var str=obj4.javascriptbook[i].topic;
           anch.textContent=str;
           anch.setAttribute("href",'javascript:hello("'+str+'")');
           var p1=document.createElement("P");
           p1.appendChild(anch);
           document.getElementById("demo1").appendChild(p1);
           }
    }
}

function myjavascript()
{
  var j=new Javascript("javascript");
  j.displayTopic();
}
