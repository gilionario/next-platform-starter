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

export default function HomePage() {
  return (
    <Card>
      <Markdown>{homeContent}</Markdown>
      <div className="mt-6">
        <Link href="/about" className="text-green-400 hover:underline">
          Saiba mais →
        </Link>
      </div>
    </Card>
  );
}

