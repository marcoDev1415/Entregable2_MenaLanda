function add_tools(){

    name_tool=prompt("Ingresa el nombre de la herramienta")
    api_key= prompt("Ingresa la key del API")

    tools.push({nombre:name_tool,api_key: api_key})
}
