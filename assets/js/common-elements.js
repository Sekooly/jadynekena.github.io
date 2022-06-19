const { createClient } = supabase
supabase = createClient(racine_data(),  apikey())

function list_posts_linkedin(){
	return ['6777136376266682369','6777861229898670081','6778585945819123712','6779673164571000832','6782194816580100097','6782919591560548352','6784731509396926464','6936941793640886272']
}

function racine_data(){
	return 'https://kxdokvtvscvjuwzgmvei.supabase.co'
}

async function select_supabase(fields,nametable,options){
	var {data,err} = await supabase
		.from(nametable)
		.select(fields)

	if(err) console.error(err)

	//options sous la forme {nom_champ_ref1: 'champ1' , valeur_champ_ref1: 'valeur1', nom_champ_ref2: 'champ2', valeur_champ_ref2: 'valeur2'}


	return data
}

function current_datas_name(nametable){
	return '____' + nametable +'_element'
}


async function insert_supabase(nametable,datas,upsert_mode){
	const { data, error } = await supabase
		.from(nametable)
		.insert(datas, { upsert: upsert_mode })

	if(error!==null){
		const verb = upsert_mode ? 'upsert' : 'insert'
		console.error("Error "+verb+"ing into table " + nametable+ ":",error)
		del_item(current_datas_name(nametable) +'_element')
	}else{
		save_item(current_datas_name(nametable) +'_element',JSON.stringify(datas))
	}
}

async function update_supabase(nametable,datas,matches){
	const { data, error } = await supabase
		.from(nametable)
		.update(datas)
		.match(matches)

	if(error!==null){
		console.error("Error updating into table " + nametable+ ":",error)
		del_item(current_datas_name(nametable) +'_element')
	}else{
		save_item(current_datas_name(nametable) +'_element',JSON.stringify(datas))
	}
}



function apikey(){
	return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4ZG9rdnR2c2N2anV3emdtdmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU2MTk3MTQsImV4cCI6MTk3MTE5NTcxNH0.ViTcu3L79EkuvGvyDiSqwdpgJ0MQFbg8nL1vO0tTcDk'
}

function navbar(){
	return `<section data-bs-version="5.1" class="menu menu2 cid-t98vDxC9FZ" once="menu" id="navbar-site">
    
	    <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
	        <div class="container-fluid">
	            <div class="navbar-brand">
	                <span class="navbar-logo">
	                    <a href="/">
	                        <img src="assets/images/logo-141x138.png" alt="Jady Nekena | Data Analyst à Lyon" style="height: 3rem;">
	                    </a>
	                </span>
	                <span class="navbar-caption-wrap"><a class="navbar-caption text-black text-primary display-7" href="/">Jady Nekena</a></span>
	            </div>
	            <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	                <div class="hamburger">
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                </div>
	            </button>
	            <div class="collapse navbar-collapse" id="navbarSupportedContent">
	                <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true"><li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="index#la-data-au-service-des-entreprises">LA DATA</a></li><li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="index#mes-services">MES SERVICES</a></li><li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="index#mon-parcours">MON PARCOURS</a></li>
	                    <li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="index#technos">TECHNOS</a>
	                    </li><li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="index#dataviz-site-web">DATAVIZ EN TEMPS REEL DU SITE</a></li>
	                    <li class="nav-item dropdown"><a class="nav-link link text-black text-primary dropdown-toggle display-4" href="/#projets" data-toggle="dropdown-submenu" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">PROJETS ACCOMPLIS</a><div class="dropdown-menu" aria-labelledby="dropdown-733" data-bs-popper="none"><a class="text-black text-primary dropdown-item display-4" href="linkedin">Publications LinkedIn</a><a class="text-black text-primary dropdown-item display-4" href="projets-donnees-ouvertes">Données ouvertes</a><a class="text-black text-primary dropdown-item display-4" href="projets-donnees-personnelles">Données personnelles</a><a class="text-black text-primary dropdown-item display-4" href="projets-automatisations">Automatisations</a></div></li><li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="index#mes-clients">ILS M'ONT FAIT CONFIANCE</a></li><li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="index#contact">CONTACT</a></li></ul>
	                
	                
	            </div>
	        </div>
	      </nav>
	  </section>

	<section data-bs-version="5.1" class="footer3 cid-t98vDxYoCA" once="footers" id="footer3-r">

	`
}


function footer(){
	return `<section data-bs-version="5.1" class="footer3 cid-t980VYl5qY" once="footers" id="footer-site">    

	    <div class="container">
	        <div class="media-container-row align-center mbr-white">
	            <div class="row row-links">
	                <ul class="foot-menu">
	                    
	                    
	                    
	                    
	                    
	                <li class="foot-menu-item mbr-fonts-style display-7"><a href="index.html#mes-services" class="text-primary">MES SERVICES</a></li><li class="foot-menu-item mbr-fonts-style display-7"><a href="index.html#mon-parcours" class="text-primary">MON PARCOURS</a></li><li class="foot-menu-item mbr-fonts-style display-7"><a href="index.html#technos" class="text-primary">TECHNOS</a></li><li class="foot-menu-item mbr-fonts-style display-7"><a href="index.html#dataviz-site-web" class="text-primary">DATAVIZ DU SITE</a></li><li class="foot-menu-item mbr-fonts-style display-7"><a href="index.html#projets" class="text-primary">PROJETS</a></li></ul>
	            </div>
	            
	            <div class="row row-copirayt">
	                <p class="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
	                    © Copyright `+new Date().getFullYear()+`. Tout droit réservé.
	                </p>
	            </div>
	            
	        </div>
	    </div>
	</section>`
}

function add_element(html, id_element, parent_element, position){
	var elem = document.createElement('div')
	elem.innerHTML = html

	if(document.getElementById(id_element)) document.getElementById(id_element).remove()

	if(parent_element){			
		if(position>0){
			var res = parent_element.insertBefore(elem.firstChild, parent_element.children[position-1]);	
		}else{
			var res = parent_element.appendChild(elem.firstChild)
		}
	}
	
	//console.log({rajoute: res})
	return res;
}


function main(){
	var body = document.getElementsByTagName('body')[0]
	add_element(navbar(), 'navbar-site', body, 1)
	add_element(footer(), 'footer-site', body, -1)

	titles()
	contents()
	come_and_go()

}


function page_name(){
	return document.title.split('|')[1].trim()
}

function title_project(){
	var name = page_name()
	return '<h3 class="title mbr-section-title align-center mb-4 mbr-fonts-style display-2" id="title-section"><strong>'+name.toUpperCase()+'</strong></h2>'
}

function titles(){
	if (location.pathname !== '/' && location.pathname !== '/index' && location.pathname !== '/index.html'){
		add_element(title_project(), 'title-section', document.getElementById('page-content'), 1)
	}
}

function loading(){
	return `<h4 class="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-6" style="padding: 15%;">Page en cours de construction, merci de votre patience.</h4>`
}

function post_linkedin(id){

	//https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6600459666352812032

	return '<iframe class="card" src="https://www.linkedin.com/embed/feed/update/urn:li:share:'+id+'" height="200" width="400" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>'
}


function content_of(page_name_str){
	if(!page_name_str.toLowerCase().trim().includes('linkedin')){
		return loading()	
	}else{

		var linkedin_posts = ''
		var my_list = list_posts_linkedin().reverse()
		my_list.forEach(function(id) {
			linkedin_posts = linkedin_posts + post_linkedin(id)
		});
		var res = `<div id="content-section">`+linkedin_posts+`</div>`

		return res
	}
	
}

function contents(){

	var content = content_of(page_name())
	add_element(content, 'content-section', document.getElementById('page-content'), -1)
}

function save_item(item_name,item_value){
	del_item(item_name)
	return window.localStorage.setItem(item_name, item_value)
}

function del_item(item_name){
	return window.localStorage.removeItem(item_name)
}

function get_item(item_name){
	return window.localStorage.getItem(item_name)
}



function now_function(){
	var dt = new Date
	/*
    return `${dt.getDate().toString().padStart(2, '0')}/${
    (dt.getMonth()+1).toString().padStart(2, '0')}/${
    dt.getFullYear().toString().padStart(4, '0')} ${
    dt.getHours().toString().padStart(2, '0')}:${
    dt.getMinutes().toString().padStart(2, '0')}:${
    dt.getSeconds().toString().padStart(2, '0')}`;*/

    return dt;
}
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function dateDiffToString(a, b){

    // make checks to make sure a and b are not null
    // and that they are date | integers types

    diff = Math.abs(a - b);

    ms = diff % 1000;
    diff = (diff - ms) / 1000
    ss = diff % 60;
    diff = (diff - ss) / 60
    mm = diff % 60;
    diff = (diff - mm) / 60
    hh = diff % 24;
    days = (diff - hh) / 24

    return {'d':days,'h':hh,'min': mm,'sec':ss,'ms':ms}

}


function new_day_of_connection(){

	var diff_date = dateDiffToString(new Date(get_item('date_premiere_visite')), new Date)
	console.log({diff_date})

	//if the saved date doesn't exist THEN it's a new connection
	//if the time elapsed is more than 30min OR 1h THEN it's a new connection
	return !get_item('date_premiere_visite') || diff_date.h > 1 || diff_date.mm > 30 
}

async function visit_details(){

	del_item('adresse_ip')

	var body = document.getElementsByTagName('body')[0]
	var res = {
		'id_visite': get_item('id_visite'),
		'adresse_ip':'',
		'pays':'',
		'region':'',
		'ville':'',
		'operateur':'',
		'navigateur':navigator.appCodeName,
		'resolution':window.screen.width +  ' x ' + window.screen.height,
		'systeme':navigator.oscpu,
		/*'date_arrivee': get_item('date_premiere_visite'),*/
		/*'date_depart':'',*/
		'timezone': '',
		'utc_offset': '',
		'url_visite': window.location.href
	}

	try{

		var client = await data_client()	
		save_item('adresse_ip',client['ip'])

		res['adresse_ip'] = client['ip']
		res['latitude'] = client['latitude']
		res['longitude'] = client['longitude']
		res['pays'] = client['country_name']
		res['region'] = client['region']
		res['ville'] = client['city']
		res['operateur'] = client['org']
		res['timezone'] = client['timezone']
		res['utc_offset'] = client['utc_offset']
	}catch(err){
		console.error('Error on client',err)
	}
	

	return res
}


function refresh_client_datas(){

	save_item('id_visite',uuidv4())
	save_item('date_premiere_visite',now_function())
	console.log('very first connection (of the day)', get_item('id_visite'))
}


async function post_a_visit(){		

		//if very first visit then NO COOKIE accepted and NO DATA SAVED AT ALL
		if(document.cookie.length === 0 && !get_item('id_visite')){
			
			refresh_client_datas() //get new datas for the client


		//if very first visit then NO COOKIE accepted and DATAS FROM LOADING are SAVED
		}else if(document.cookie.length === 0 && get_item('id_visite')){
			//nothing cause we keep the same datas


		//----------------- COOKIES ACCEPTED FROM HERE ----------------- 
		//new day of connection for an already known user
		}else if(new_day_of_connection()){

			disconnect() //est_parti = true for the old one
			refresh_client_datas() //get new datas for the client


		//NOT first visit: cookies are accepted, current user already known by server
		}else{
			console.log('user recognized',get_item('id_visite'))
		}

		var a_visit = await visit_details()

		//upsert ONLY if datas are complete
		if(a_visit.pays!==''){
			console.log({a_visit})
			await insert_supabase('visites',a_visit,true) //doesn't do an update if user is recognized

		}

}

async function data_client(){
	return await get_result('https://ipapi.co/json/')
}

async function get_result(url){
	return await fetch_url(url).then(e => e)
}

function fetch_url(url, callback){

	return fetch(url).then(function (response) {
		// The API call was successful!
			return response.json();
		

	}).then(function (data) {
		// This is the JSON from our response
		if(callback!==undefined){
			return callback(data)
		}else{
			return data
		}


	}).catch(function (err) {
		// There was an error
		console.error('Something went wrong.', err);
		return false
	});
}

function post_a_visit_by_cookies(){

	var btn_cookie = document.getElementById('impliedsubmit')
	if(btn_cookie) btn_cookie.addEventListener('mouseup', post_a_visit)
	
	return btn_cookie
}

function date_yyyy_MM_dd(the_date){
	const offset = the_date.getTimezoneOffset(); the_date = new Date(the_date.getTime() + (offset*60*1000));
	return the_date.toISOString().split('T')[0]
}


async function disconnect(){
	var end_visit = {
		'est_parti': true
	}

	var matches = {
		'date_arrivee_sans_heure' : date_yyyy_MM_dd(new Date(get_item('date_premiere_visite'))),
		'id_visite': get_item('id_visite'),
		'adresse_ip': get_item('adresse_ip')
	}

	console.log('disconnected to previous session')
	//console.log(end_visit)
	return await update_supabase('visites',end_visit,matches)
}

async function post_quit(e){

	var confirmationMessage = "\o/";
	await disconnect()
	e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
	return confirmationMessage;              // Gecko, WebKit, Chrome <34



}


function come_and_go(){
	// after landing OR very first accepting cookies via button
	document.addEventListener('DOMContentLoaded', post_a_visit)
	document.addEventListener('DOMContentLoaded', post_a_visit_by_cookies)

	// before leaving the website
	window.addEventListener('beforeunload', post_quit)

}

function post_when_clicked(){
	/*
		> id_visite
		> date_clic
		> url_page_source
		> tag
		> contenu_clic (textContent, alt)
		> lien (optionnel)
		> id_element (optionnel)
	*/
	document.addEventListener('click', function(e){
		var element = e.target
		var tag_element = element.tagName
		var textContent = element.id || element.textContent || element.alt;

		if(textContent.trim().length > 0){

			console.log({'textContent': textContent})

		}


	})
}




main()