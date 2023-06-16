const apiCEP = axios.create({
    baseURL:"http://viacep.com.br/ws/"
});

async function consulta(){

    const cep = inpCEP.value;

    const resp = await apiCEP.get(cep + "/json/");

    const {logradouro} = resp.data;
    const {bairro} = resp.data;
    const {localidade} = resp.data;

    pRua.textContent = (logradouro);
    pBairro.textContent = "Bairro: " + (bairro);
    pCidade.textContent = "Cidade: " + (localidade);

    console.log(resp);
};

btnBusca.onclick= ()=>{
    consulta();
};