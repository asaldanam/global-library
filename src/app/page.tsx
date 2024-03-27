import Link from 'next/link';

export default function Page() {
    return (
        <main>
            <ul className="px-4">
                <li className="mt-4">
                    <div>
                        <div>Escribe tu historia</div>
                        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/editor">
                            /editor
                        </Link>
                    </div>
                </li>
                <li className="mt-4">
                    <div>
                        <div>Publica tu historia para siempre en IPFS</div>
                        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/publish">
                            /publish
                        </Link>
                    </div>
                </li>
                <li className="mt-4">
                    <div>
                        <div>Importa tu historia desde Notion</div>
                        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/import">
                            /import
                        </Link>
                    </div>
                </li>
                <li className="mt-4">
                    <div>
                        <div>Para maquetar el lector de historias</div>
                        <Link
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            href="/playground"
                        >
                            /playground
                        </Link>
                    </div>
                </li>
            </ul>
        </main>
    );
}
