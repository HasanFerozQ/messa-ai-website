function toggleMenu(){document.getElementById('navLinks').classList.toggle('open')}
function showPricing(id,btn){
  ['chatbot','website','bundle'].forEach(function(k){document.getElementById('price-'+k).classList.add('hidden')});
  document.getElementById('price-'+id).classList.remove('hidden');
  document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('active')});
  btn.classList.add('active');
}
function toggleChat(){document.getElementById('chatPanel').classList.toggle('open')}
function openChat(){document.getElementById('chatPanel').classList.add('open');document.getElementById('chatInput').focus()}
function addMsg(text,who){
  var b=document.getElementById('chatBody');var d=document.createElement('div');d.className='msg '+who;d.textContent=text;b.appendChild(d);b.scrollTop=b.scrollHeight;
}
function botReply(q){
  q=q.toLowerCase();
  if(q.includes('price')||q.includes('cost')||q.includes('pricing')) return 'Chatbots start at $349, websites at $499, and the Website + Chatbot Bundle starts at $999. Care is $79/month, optional. Want a Growth quote for your business type?';
  if(q.includes('time')||q.includes('long')||q.includes('fast')) return 'Most chatbots go live in 7 days, most websites in 7-14 days. We show you a demo in 48 hours first, so you can try before the final payment.';
  if(q.includes('whatsapp')) return 'WhatsApp is best for UK/EU appointment businesses. Website chat is best for US visitors. Growth and Pro bots can do both, plus Messenger. WhatsApp platform fees are separate and shown upfront.';
  if(q.includes('book')||q.includes('call')||q.includes('demo')) return 'Great — use the contact form below, or email essa.bin.hasan@gmail.com with subject “Chatbot demo”, and tell us your business type. We reply with a demo idea within 1 business day.';
  if(q.includes('website')) return 'We build fast, mobile-first business websites and landing pages, from $499. The Bundle adds a chatbot trained on your new site, from $999 total.';
  if(q.includes('shop')||q.includes('shopify')||q.includes('order')) return 'For shops we build order, stock, shipping and returns bots. They answer from your store content and send shoppers to checkout, instead of leaving them waiting for email.';
  if(q.includes('gdpr')||q.includes('privacy')||q.includes('data')) return 'We collect only what the bot needs to answer or book, link a clear privacy note, and never sell customer data. A human handoff is always available.';
  if(q.includes('human')||q.includes('person')) return 'Yes — when the bot does not know, it says so, captures the question, and hands off to you. It never invents prices or availability.';
  return 'Good question. We build AI chatbots and modern websites for US, UK and EU businesses. Try asking about pricing, timeline, WhatsApp, or booking a call — or use the contact form for a free demo for your business.';
}
function sendChat(e){
  e.preventDefault();var i=document.getElementById('chatInput');var v=i.value.trim();if(!v) return;
  addMsg(v,'user');i.value='';setTimeout(function(){addMsg(botReply(v),'bot')},400);
}
function quickAsk(k){
  var map={pricing:'What is the pricing?',timeline:'How long does it take?',whatsapp:'WhatsApp or website bot?',book:'How do I book a call?'};
  addMsg(map[k],'user');setTimeout(function(){addMsg(botReply(map[k]),'bot')},400);
}
document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  var f=new FormData(e.target);
  var subject=encodeURIComponent('Chatbot demo request — '+f.get('business'));
  var body=encodeURIComponent('Name: '+f.get('name')+'\nBusiness: '+f.get('business')+'\nEmail: '+f.get('email')+'\nNeed: '+f.get('need')+'\nMessage: '+f.get('message'));
  document.getElementById('formNote').textContent='Opening your email app with your details prefilled…';
  window.location.href='mailto:essa.bin.hasan@gmail.com?subject='+subject+'&body='+body;
});
