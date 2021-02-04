<template>
      <div class="container">
		<div class="section">
			<div class="row ">
				<div class="col s12 pad-0">
					<br>
				    <ul class="events">
						<li class="event-item card center">
							<img class="z-depth-1 image" style="width: 100%;" src="assets/images/persia.jpg">
							<div class="info">
								<div class="title waves-effect waves-light pulse">Welcome to Persia Lounge</div>
								<p><i class="mdi mdi-road-variant"></i> TRM Drive, TRM Mall</p>
								<p class="entry"><i class="mdi mdi-pin"></i> Your Current location</p>
								<a href="#/profile/" class='modal-trigger waves-effect waves-light pulse view-btn btn-small waves-effect direction-top'>Get Our Services<i class='mdi mdi-arrow-right'></i></a>
								<br>
							</div>
						</li>
					</ul>
					<h5 class="bot-20 sec-tit  ">Closer To You</h5> 
					<ul class="events">
						<li class="event-item card">
							<img class="z-depth-1 image" style="width: 100%;" src="assets/images/kiza.jpg">
							<div class="info">
								<div class="title"><i class="mdi mdi-office-building"></i> Kiza Lounge</div>
								<p><i class="mdi mdi-road-variant"></i> Harambe Avenue , Gochen Towers</p>
								<p class="entry"> <i class="mdi mdi-pin"></i> 1.5km from your location</p>
								<a href="ui-app-event-view.html" style="float:right;" class='view-btn btn-small waves-effect direction-top'>Get More Details<i class='mdi mdi-arrow-right'></i></a>
								<br>
							</div>
							
						 </li>
						 <li class="event-item card">
							<img class="z-depth-1 image" style="width: 100%;" src="assets/images/space.jpg">
							<div class="info">
								<div class="title"><i class="mdi mdi-office-building"></i> Space Lounge</div>
								<p><i class="mdi mdi-road-variant"></i> Langata Road, Opposite Shell Petrol station</p>
								<p class="entry"> <i class="mdi mdi-pin"></i> 3.0km from your location</p>
								<a href="ui-app-event-view.html" style="float:right;" class='view-btn btn-small waves-effect direction-top'>Get More Details<i class='mdi mdi-arrow-right'></i></a>
								<br>
							</div>
						 </li>
						 <li class="event-item card">
							<img class="z-depth-1 image" style="width: 100%;" src="assets/images/memphis.jpg">
							<div class="info">
								<div class="title"><i class="mdi mdi-office-building"></i> Memphis Lounge</div>
								<p><i class="mdi mdi-road-variant"></i> USIU Road, Max Towers</p>
								<p class="entry"><i class="mdi mdi-pin"></i> 3.9km from your location</p>
								<a href="ui-app-event-view.html" style="float:right;" class='view-btn btn-small waves-effect direction-top'>Get More Details<i class='mdi mdi-arrow-right'></i></a>
								<br>
							</div>
						  </li>
						  <li class="event-item card">
							<img class="z-depth-1 image" style="width: 100%;" src="assets/images/memphis.jpg">
							<div class="info">
								<div class="title"><i class="mdi mdi-office-building"></i> Memphis Lounge</div>
								<p><i class="mdi mdi-road-variant"></i> USIU Road, Max Towers</p>
								<p class="entry"><i class="mdi mdi-pin"></i> 3.9km from your location</p>
								<a href="ui-app-event-view.html" style="float:right;" class='view-btn btn-small waves-effect direction-top'>Get More Details<i class='mdi mdi-arrow-right'></i></a>
								<br>
							</div>
						  </li>
						  <li class="event-item card">
							<img class="z-depth-1 image" style="width: 100%;" src="assets/images/memphis.jpg">
							<div class="info">
								<div class="title"><i class="mdi mdi-office-building"></i> Memphis Lounge</div>
								<p><i class="mdi mdi-road-variant"></i> USIU Road, Max Towers</p>
								<p class="entry"><i class="mdi mdi-pin"></i> 3.9km from your location</p>
								<a href="ui-app-event-view.html" style="float:right;" class='view-btn btn-small waves-effect direction-top'>Get More Details<i class='mdi mdi-arrow-right'></i></a>
								<br>
							</div>
						  </li>
						  <li class="event-item card">
							<img class="z-depth-1 image" style="width: 100%;" src="assets/images/memphis.jpg">
							<div class="info">
								<div class="title"><i class="mdi mdi-office-building"></i> Memphis Lounge</div>
								<p><i class="mdi mdi-road-variant"></i> USIU Road, Max Towers</p>
								<p class="entry"><i class="mdi mdi-pin"></i> 3.9km from your location</p>
								<a href="ui-app-event-view.html" style="float:right;" class='view-btn btn-small waves-effect direction-top'>Get More Details<i class='mdi mdi-arrow-right'></i></a>
								<br>
							</div>
						  </li>
					   </ul>
					 </div>
				</div>
			</div>
		   <br><br><br><br><br>
		</div>
</template>

<script>
export default {
  name: 'home',
  mounted(){
       $( ".mdi-arrow-left " ).hide();
  },
  methods: {
    openMenu: () => {
      // When user tap the button dispatch an event into the dom.
      // Its will trigger the drawer Open event in (componnents/Drawer.vue)
      document.dispatchEvent(new CustomEvent("toggleDrawer", {}));
    }
  }
}
</script>

<style scoped>
  img.logo{
    display: inline-block;
    width: 90px;
    padding: 20px;
  }
</style>
