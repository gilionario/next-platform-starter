import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import Link from 'next/link';

export const metadata = { title: 'Home' };

const homeContent = `
## Bem-vindo

Transformamos informação complexa em conhecimento acessível.  
Ajudamos empresas e pessoas a encontrar, organizar e utilizar dados de forma **rápida e eficiente**.

## O Problema que Resolvemos

Na internet, a informação está espalhada e muitas vezes desatualizada.  
Encontrar dados relevantes pode ser **difícil e demorado**.

## Nossa Solução

Oferecemos:

- Sistemas web que consolidam dados dispersos  
- Portais e bases de dados atualizadas  
- Ferramentas de pesquisa rápidas e intuitivas  
- Serviços de TI e informática  

> Tornamos a informação complexa simples e útil.
`;

export default function Home() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="text-4xl font-bold mb-6"></h1>
                <Markdown content={homeContent} className="text-lg mb-6" />
                <Card className="p-6 max-w-2xl">
                    <h3 className="text-2xl font-bold mb-2">Quer saber mais?</h3>
                    <p>
                        Explore as páginas <Link href="/o-que-fazemos" className="text-green-200 underline">O Que Fazemos</Link> e <Link href="/sobre" className="text-green-200 underline">Sobre</Link> para descobrir como podemos ajudá-lo.
                    </p>
                </Card>
            </section>
        </div>
    );
}

