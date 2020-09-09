var app = new Vue({ 
	el: '#app',
	components: {
    	'cotiza': {
              props: ['cotiza'],
			  template: `
					<tr v-bind:class="cotiza.facturada ? 'facturada' : 'pendiente'">
  					  <td>{{cotiza.id }}</td>
  					  <td>{{ cotiza.fecha }}</td>
  					  <td>{{ cotiza.cliente }}</td>
  					  <td>{{ cotiza.facturada }}</td>
  					  <td>{{ cotiza.partidas }}</td>
  					  <td>{{ cotiza.proyecto }}</td>
  					  <td><i class="icon edit"></i><i class="icon delete"></i></td> 
  					</tr>
					`
					}
	},
	data: {
		cotiza: [
			{id: 1, fecha: '2020-01-11', cliente: 'cliente 1', facturada: false, partidas: 3, proyecto: 'proyecto 1'},
			{id: 2, fecha: '2020-04-25', cliente: 'cliente 2', facturada: false, partidas: 3, proyecto: 'proyecto 2'},
			{id: 3, fecha: '2020-05-03', cliente: 'cliente 3', facturada: true, partidas: 3, proyecto: 'proyecto 3'},
			{id: 4, fecha: '2020-09-08', cliente: 'cliente 4', facturada: false, partidas: 3, proyecto: 'proyecto 3'}, 
			{id: 5, fecha: '2020-09-08', cliente: 'cliente 5', facturada: false, partidas: 3, proyecto: 'proyecto 3'}, 
			{id: 6, fecha: '2020-09-08', cliente: 'cliente 6', facturada: true, partidas: 3, proyecto: 'proyecto 3'}, 
		],
		message: 'Hello Mundito de chocolate!'
	},
	computed: {
		cotizacionFacturada: function(){
			return this.cotiza.filter( item => item.facturada == true );

		},
		cotizacionPendiente: function(){
			return this.cotiza.filter( item => item.facturada == false );

		}
	}
})