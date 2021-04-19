import React, {useState, useEffect} from 'react'

function Pokemon() {

    var [imagen, setImagen] = useState()
    var [nombre, setNombre] = useState("pokémon")
        var [actualizar, setActualizar] = useState(false)
    var [comparar, setComparar] = useState(false)
    var [skip, setSkip] = useState(false)


    useEffect(() => {
        const species = Math.ceil(Math.random() * 809);

        fetch('https://pokeapi.co/api/v2/pokemon/' + species)
            .then(res => res.json())
            .then(data => {
                setImagen(imagen = data.sprites.other["official-artwork"].["front_default"])
                console.log(data.name)

                if (species == 782 ||
                    species == 783 ||
                    species == 784
                ) {
                    setNombre(nombre = data.name)
                } else {
                    setNombre(nombre = data.name.split("-")[0])
                }
            }
        )
    }, [actualizar] )

    function HandleChange(event) {

        if ((event.target.value.toLowerCase()) == nombre) {
            setComparar(true)
            document.getElementById('userinput').value = ''
        }
    }

    function HandleClick() {
        setSkip(true)
        document.getElementById("userinput").value = ''
        document.getElementById("userinput").focus();
    } 

    if (comparar || skip) {
        setActualizar(!actualizar)
        setSkip(false)
        setComparar(false)
    }

    return (
        <div>
            <img src={imagen} width="300" />
            <br/>
            <input
                placeholder="pokemon name"
                onChange={HandleChange}
                id="userinput"
            />
            <button onClick={HandleClick}>Skip</button>
        </div>
    )
}
export default Pokemon;