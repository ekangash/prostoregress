/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";

/** 2 App - Components, Hooks */
import {Image} from "@/components/shared/image/Image";
import {Video} from "@/components/shared/video/Video";
import {DocumentCard} from "@/components/widgets/documents/card/DocumentCard";
import {Button} from "@/components/shared/button/Button";
import {DocumentsDialogView} from "@/components/entities/documents/dialog/view/DocumentsDialogView";

/** 3 Entities, Stores, Packages, Enums ... */


const DOCUMENTS = [
    {
        title: 'Регрессивная гипнотерапия',
        description: 'Регрессионная терапия - это форма психотерапии, при которой гипнолог заставляет человека вспомнить события, скрытые в подсознании. Регрессивная гипнотерапия всегда погружает человека в травмирующее событие. Цель регрессионной терапии - вывести подавленные эмоции в сознательное состояние, а затем высвободить их. Травмирущее событие может быть в этой жизни в более раннем периоде, или в одной из других прошлых жизней. Простыми словами регрессия  - это путешествие во времени. Это прыжок в глубины, в чувства и эмоции, в поиске ответов на ваши вопросы. Это путешествие в самого себя. И неважно, происходит ли это вовне или в твоем разуме - это ваш сон, и вы будешь в самом его центре.',
        cover: '/img/why-chose-us-thumb.png',
    },
    {
        title: 'Регрессивная гипнотерапия с участием слипера/контактера',
        description: 'Сеанс проводится с профеcсиональным слипером, который видит тонкий план, и который на протяжении всего сеанса будет вашим помощником и вашими глазами там, где ваше подсознание заблокирует для вас информацию, чтобы уберечь вас снова пережить травмирующей случай. Слипер же гарантировано сможет разблокирует специальными техниками ваше подсознание, и нам не придётся останавливать сеанс, из-за того, что ваше подсознание перестало выходить с вами на связь, и теперь нужно дать ему время, а вам придётся запастись терпением, и прийти еще на один или несколько сеансов, чтобы завершить проработку вашего запроса. Сеанс со слипером всегда гарантированно прорабатывает ваш запрос конкретно в текущем сеансе.',
        cover: '/img/blog-thumb1-2.jpg',
    },
    {
        title: 'НЛП Техника',
        description: 'Нейролингвистическое программирование.Терапевтический метод психологии и техника для развития личности. Помогает решать разные задачи, от развития коммуникативных навыков до избавления от депрессией, фобий, страхов, зависимостей.',
        cover: '/img/blog-thumb2-3.jpg',
    }
];

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const Documents: React.FC = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {DOCUMENTS.map((document, idx) => (
                <DocumentCard
                    key={idx}
                    cover={document.cover}
                    title={document.title}
                    description={document.description}
                >
                    <DocumentsDialogView
                        cover={document.cover}
                        title={document.title}
                        description={document.description}
                    />
                </DocumentCard>
            ))}
        </div>
    )

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
            <div className="flex flex-col lg:flex-row items-center col-span-4 gap-4 p-4 bg-secondary rounded-3xl">
                <Image
                    as="div"
                    rounded="3xl"
                    className="relative aspect-w-16 aspect-h-4 w-full"
                    src="/video/pink-and-yellow-powder-jumping.mp4"
                />
                <p className="text-md text-minor w-full ">
                      </p>
            </div>
            <Video
                as="div"
                rounded="3xl"
                className="aspect-w-16 aspect-h-5 col-span-2"
                src="/video/pink-and-yellow-powder-jumping.mp4"
            >
                <div className="flex items-center justify-center p-4 bg-black/50 rounded-3xl">
                    <p className="text-2xl text-center font-extrabold text-white">Методы гипнокорекции</p>
                </div>
            </Video>
            <div className="flex flex-col items-center col-span-3 gap-4 p-4 bg-secondary rounded-3xl">
                <Image
                    rounded="3xl"
                    className="relative aspect-w-16 aspect-h-5 w-full"
                    src="/img/blog-thumb1-2.jpg"
                >
                    <div className="flex items-center justify-center p-4 bg-black/40 rounded-3xl">
                        <p className="text-2xl text-center font-extrabold text-white">Техника 6-шагов рефрейминга</p>
                    </div>
                </Image>
                <p className="text-md text-minor w-full ">
                    Это универсальная техника НЛП для изменения нежелательного поведения на более эффективное. Автором этой техники является один из основателей НЛП Джон Гриндер. Техника предполагает, что работать будет ваше подсознание.
                </p>
            </div>
            <div className="flex flex-col items-center col-span-3 gap-4 p-4 bg-secondary rounded-3xl">
                <Image
                    rounded="3xl"
                    className="relative aspect-w-16 aspect-h-5 w-full"
                    src="/img/blog-thumb2-3.jpg"
                >
                    <div className="flex items-center justify-center p-4 bg-black/40 rounded-3xl">
                        <p className="text-2xl text-center font-extrabold text-white">Техника 6-шагов рефрейминга</p>
                    </div>
                </Image>
                <p className="text-md text-minor w-full ">
                    Эзотерический мир неведом для большинства, и это может напугать. И так как пока наука не даёт ему внятного объяснения, ей легче всего отрицать такую перспективу. Если вы предполагаете, что ваша ситуация физического, эмоционального, социального и прочего характера может иметь эзотерическую причину, тогда Вы можете воспользоваться сеансом экзорегресса.
                </p>
            </div>
        </div>
    )
}