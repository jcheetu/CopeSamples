var PRODUCTION={url:""},DEVELOPMENT={url:"http://localhost:1337"};window.environment=DEVELOPMENT,console.log(window.location.hostname);var url=window.environment.url,JavaScriptCode=document.createElement("script");JavaScriptCode.setAttribute("type","text/javascript"),JavaScriptCode.setAttribute("src",url+"/js/AI/dialogueflow/widget/allchat.js"),document.getElementById("generic-chat-container").appendChild(JavaScriptCode),(JavaScriptCode=document.createElement("script")).setAttribute("type","text/javascript"),JavaScriptCode.setAttribute("src",url+"/js/config/env.js"),document.getElementById("generic-chat-container").appendChild(JavaScriptCode),CssCode=document.createElement("link"),CssCode.setAttribute("rel","stylesheet"),null==document.getElementById("generic-chat-container").getAttribute("custom-css")||null===document.getElementById("generic-chat-container").attr("custom-css")?document.write("<link rel='stylesheet' type='text/css' href='"+url+"/css/allBot.css' />"):document.write(document.getElementById("generic-chat-container").getAttribute("custom-css")),document.write("<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>"),window.onload=function(){$("#generic-chat-container").chat({accessToken:document.getElementById("generic-chat-container").getAttribute("access-token"),chatbotTitle:document.getElementById("generic-chat-container").getAttribute("chatbot-title"),initialMessage:null==document.getElementById("generic-chat-container").getAttribute("initial-message")||""==document.getElementById("generic-chat-container").getAttribute("initial-message")?"Hi":document.getElementById("generic-chat-container").getAttribute("initial-message"),ai:"DIALOGUEFLOW"})};