# bintangin.js
simple easy jquery plugin for rate your post
<h3>CSS</h3>
<pre>&lt;!-- include fontawesome --&gt;
&lt;link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"&gt;

&lt;!-- custom style --&gt;
&lt;style&gt;
i.bintang {
  cursor: pointer;
  color: black
}
i.bintangin {
  color: yellow
}
&lt;/style&gt;</pre>
<h3>HTML</h3>
<pre>&lt;!-- id = id artikel, blog, post dll yang ada di database --&gt;
&lt;div id="1" class="anu" data-bintangin="3"&gt;&lt;/div&gt;

&lt;div id="2" class="anu" data-bintangin="1"&gt;&lt;/div&gt;

&lt;div id="3" class="anu" data-bintangin="0"&gt;&lt;/div&gt;</pre>
<h3>jQuery</h3>
<pre>&lt;!-- include jquery --&gt;
&lt;script type="text/javascript" src="//code.jquery.com/jquery-2.2.1.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="bintangin.js"&gt;&lt;/script&gt;
&lt;script&gt;
// Install by ClassName
$(document).ready(function(){
  $(".anu").bintangin(
    save = "http://anu.kom/post/update.php", // url untuk mengupdate rate bintang ke database menggunakan method POST dengan 3 parameter yaitu postid, rate &amp; visitor
    visitor = "otong", // by user id, name or ipaddress
    message = "bintang"
  );
});
&lt;/script&gt;</pre>
<h1><a href="http://ibacor.com/demo/bintanginjs" target="_BLANK">DEMO</a></h1>
