import './style.css'
import Aventureiro from '../../assets/Aventureiro.svg'

const ConjuntoSuporte = () => {

    return(
        <div>
            <div className='ConteudoGeralSuporte'>
                <h1 className='Underline'>SUPORTE</h1>
                <img width={288} height={326} src={Aventureiro} alt="" />
                <h1>PERGUNTAS FREQUENTES</h1>

                <section className='ConteudoPerguntas'>
                    <details>
                        <summary>Não consigo fazer login</summary>
                        <p>→  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam facere amet nisi neque. A eveniet laudantium, inventore reiciendis sit nostrum saepe neque obcaecati, quis molestias minus fuga illo? Quasi?</p>
                    </details>

                    <details>
                        <summary>Não consigo fazer login</summary>
                        <p>→  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis at atque, minus soluta voluptatum maxime non perferendis iure doloribus sapiente reprehenderit dolore! Libero quae aspernatur odit quaerat omnis ut ipsam?</p>
                    </details>

                    <details>
                        <summary>Não consigo fazer login</summary>
                        <p>→  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis at atque, minus soluta voluptatum maxime non perferendis iure doloribus sapiente reprehenderit dolore! Libero quae aspernatur odit quaerat omnis ut ipsam?</p>
                    </details>

                    <details>
                        <summary>Não consigo fazer login</summary>
                        <p>→   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis at atque, minus soluta voluptatum maxime non perferendis iure doloribus sapiente reprehenderit dolore! Libero quae aspernatur odit quaerat omnis ut ipsam?</p>
                    </details>

                    <details>
                        <summary>Não consigo fazer login</summary>
                        <p>→  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis at atque, minus soluta voluptatum maxime non perferendis iure doloribus sapiente reprehenderit dolore! Libero quae aspernatur odit quaerat omnis ut ipsam?</p>
                    </details>
                </section>
            </div>
        </div>
    )
}

export default ConjuntoSuporte