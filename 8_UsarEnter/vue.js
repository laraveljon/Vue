var app = new Vue({

	el: '#app',

	data:{

		titulo : 'Listado de tareas',
		// objeto con arreglo
		tareas :[
					{

						texto : 'Aprender vue.js',
						terminada: false
					},
					{

						texto : 'Aprender .net ',
						terminada: false
					},
					{

						texto : 'Aprender PHP',
						terminada: false
					},
		        ],

    // Crear una nueva propiedad de nueva tarea
    nuevaTarea : '' 


	},
	methods:{
			
			agregarTarea : function(){

				var texto = this.nuevaTarea.trim();

				if(texto){
					// push para poder agregar un nuevo elemento allistado de tareas

					this.tareas.push({
						texto:texto,
						terminada:false
					})

				}

				this.nuevaTarea = '';
			},

			borrar : function(indice){
				//  para borrar un elemento se realiza SLICE
				//  
				this.tareas.splice(indice, 1)
			}
		}
}); 