<script>

  var  closeBtn_sidebar = document.getElementById(&#39;closeBtn_sidebar&#39;);   
  var  arabic42classsidebar1 = document.getElementById(&#39;arabic42_class_sidebar1&#39;);
  var  arabic42classsidebar = document.getElementById(&#39;arabic42_class_sidebar&#39;);
  var  arabic42classcontent = document.getElementById(&#39;arabic42_class_content&#39;);
  var  logoin = document.getElementById(&#39;logo_in&#39;);   
  var  navbar = document.getElementById(&#39;navbar&#39;);     

  
      
      
  if (window.innerWidth &lt; 1000) {
  closeBtn_sidebar.style.display= &quot;block&quot;;      
  arabic42classsidebar1.style.display= &quot;block&quot;;
  arabic42classsidebar1.style.width= &quot;29px&quot;;
  arabic42classsidebar.style.position= &quot;fixed&quot;;
  arabic42classsidebar.style.width= &quot;0&quot;;    
  arabic42classsidebar.style.overflowX= &quot;hidden&quot;;       
  arabic42classsidebar.style.transition= &quot;0.5s&quot;;    
  arabic42classcontent.style.width= &quot;95%&quot;;
  logoin.style.float= &quot;none&quot;;
  logoin.style.width= &quot;auto&quot;;      
  navbar.style.float= &quot;none&quot;;
  navbar.style.paddingRight= &quot;0&quot;;
  navbar.style.fontSize= &quot;x-large&quot;;      
  navbar.style.fontWeight= &quot;bold&quot;;

      
      
          document.getElementById(&quot;logo_in&quot;).innerHTML = `
<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-g9qza_7vjI1lj9TBfWfvImSYG-1eGvV-LlUD07GHnTDY2EZEiRCERY_luzmoAmiD05qCPdAFgqAuViOF2_RFoGRcTB9ojb9Os24-Xi3iX8VFPf_JCkgHpuX6SIEVRZpLDTOBhDID3HsKvz5Gdi4mioAscPs5fLtaQW8aVsstFJcnDtRtIVN2xhNPcbWn/s1223/%D8%B4%D8%B9%D8%A7%D8%B1%20%D8%B9%D8%A7%D9%84%D9%8A%20%D8%A7%D9%84%D8%AF%D9%82%D8%A9.png' style='width: 100px;vertical-align: middle;'/>
        `;    
          document.getElementById(&quot;navbar&quot;).innerHTML = `
		<botton id='qaima' onclick='mneua()'>&#8803; القائمة</botton>
      	<ul class='unit_ul' id='mneu' style='position: absolute;width: 100%;background: white;'>
    	<li><button class='mnue_button' href='#'>الصفحة الرئيسية</button></li>
  		<li><button class='mnue_button' href='#'>من نحن</button></li>
  		<li><button class='mnue_button' href='#'>رسالتنا</button></li>
  		<li><button class='mnue_button' href='#'>رؤيتنا</button></li>
        </ul>
        `; 
   var  mneu = document.getElementById(&#39;mneu&#39;);
   mneu.style.height= &quot;0&quot;;      
   mneu.style.overflowX= &quot;hidden&quot;; 
   mneu.style.padding= &quot;0&quot;;
   mneu.style.transition= &quot;0.5s&quot;;
      
      function mneua() {
      
        if (mneu.style.height === &#39;0px&#39;) {
      	document.getElementById(&quot;qaima&quot;).innerHTML =&#39;رجوع&#39;
            mneu.style.height = &#39;100%&#39;; // إظهار العنصر
        } else {
            mneu.style.height = &#39;0px&#39;; // إخفاء العنصر
        	document.getElementById(&quot;qaima&quot;).innerHTML =&quot;&#8803; القائمة&quot;;
      	}


      }
      
      
      
      function sidebararabic42() {
      arabic42classsidebar1.style.display= &quot;none&quot;;
      arabic42classsidebar.style.removeProperty(&#39;position&#39;);
      arabic42classsidebar.style.width= &quot;100%&quot;;
      arabic42classsidebar.style.zIndex= &quot;2&quot;;      
      arabic42classcontent.style.zIndex= &quot;1&quot;;
      arabic42classcontent.style.width= &quot;0%&quot;;
      
      arabic42classsidebar.style.transition= &quot;0.5s&quot;;  
      }
      
	document.getElementById(&#39;closeBtn_sidebar&#39;).onclick = function() {
	arabic42classsidebar1.style.display= &quot;block&quot;;
    arabic42classsidebar1.style.width= &quot;5%&quot;;
  	arabic42classsidebar.style.position= &quot;fixed&quot;;
	arabic42classsidebar.style.width= &quot;0&quot;;    
 	arabic42classsidebar.style.overflowX= &quot;hidden&quot;;       
    arabic42classsidebar.style.width= &quot;0&quot;;
    arabic42classsidebar.style.transition= &quot;0s&quot;;    
    arabic42classcontent.style.width= &quot;95%&quot;;
      }

    }
  </script>