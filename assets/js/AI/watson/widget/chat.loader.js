var PRODUCTION={url:""};var DEVELOPMENT={url:"http://localhost:1337"};window.environment=DEVELOPMENT;var url=window.environment.url;var JavaScriptCode=document.createElement("script");JavaScriptCode.setAttribute("type","text/javascript");JavaScriptCode.setAttribute("src",url+"/js/AI/watson/widget/allchat.js");document.getElementById("generic-chat-container").appendChild(JavaScriptCode);CssCode=document.createElement("link");CssCode.setAttribute("rel","stylesheet");if(document.getElementById("generic-chat-container").getAttribute("custom-css")==undefined||document.getElementById("generic-chat-container").attr("custom-css")===null){document.write("<link rel='stylesheet' type='text/css' href='"+url+"/css/allBot.css' />")}else{document.write(document.getElementById("generic-chat-container").getAttribute("custom-css"))}document.write("<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>");window.onload=function(){$("#generic-chat-container").chat({accessToken:document.getElementById("generic-chat-container").getAttribute("access-token"),chatbotTitle:document.getElementById("generic-chat-container").getAttribute("chatbot-title"),initialMessage:document.getElementById("generic-chat-container").getAttribute("initial-message")==(null)||(document.getElementById("generic-chat-container").getAttribute("initial-message")=="")?"Hi":document.getElementById("generic-chat-container").getAttribute("initial-message"),ai:"WATSON",username:document.getElementById("generic-chat-container").getAttribute("username"),password:document.getElementById("generic-chat-container").getAttribute("password")})};