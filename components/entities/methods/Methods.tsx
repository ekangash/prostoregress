/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import React from "react";
import {Image} from "@/components/shared/image/Image";
import {Video} from "@/components/shared/video/Video";

const TASKS_ALERTS = [
    {
        title: '',
        description: 'Регрессионная терапия - это форма психотерапии, при которой гипнолог заставляет человека вспомнить события, скрытые в подсознании. Цель регрессионной терапии - вывести подавленные эмоции в сознательное состояние, а затем высвободить их. Регрессионная терапия может включать гипноз, состояние, подобное трансу, в котором человек открыт для внушений.\n' +
            'Простыми словами - это путешествие во времени. Это прыжок в глубины, в твои чувства и эмоции, в поиске ответов на твои вопросы. Это путешествие в самого себя. И неважно, происходит ли это вовне или в твоем разуме - это твой сон, и ты будешь в самом его центре.',
    },
    {
        title: 'Техника 6-шагов рефрейминга',
        description: 'Неуверенность в себе, низкая самооценка, страх, тревога, агрессия, вина, стыд, зависть, горевание, личные границы. Вы узнаете, кто стоит за тем, чтобы создавать вам ситуации, где вы испытываете вновь и вновь вынуждены испытывать негативные эмоции, и как изменить.',
    },
    {
        title: 'Экзорегресс-чистка биополя',
        description: 'Прошлый опыт может быть причиной того, что вы неудовлетворены своим финансовым благополучием. С помощью регрессивного гипноза вы уберёте влияние негативных программ из прошлого, снимите подсознательные блокировки и сможете улучшить своё финансовое состояние.',
    },
]

export const Methods: React.FC = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
            <div className="flex flex-col lg:flex-row items-center col-span-4 gap-4 p-4 bg-secondary rounded-3xl">
                <Image
                    rounded="3xl"
                    className="relative aspect-w-16 aspect-h-4 h-full w-xs"
                    src="/img/why-chose-us-thumb.png"
                >
                    <div className="flex items-center justify-center p-4 bg-black/40 rounded-3xl">
                        <p className="text-2xl text-center font-extrabold text-white">Регрессивная гипнокорекция</p>
                    </div>
                </Image>
                <p className="text-md text-minor w-full ">
                    Регрессионная терапия - это форма психотерапии, при которой гипнолог заставляет человека вспомнить события, скрытые в подсознании. Цель регрессионной терапии - вывести подавленные эмоции в сознательное состояние, а затем высвободить их. Регрессионная терапия может включать гипноз, состояние, подобное трансу, в котором человек открыт для внушений.
                    Простыми словами - это путешествие во времени. Это прыжок в глубины, в твои чувства и эмоции, в поиске ответов на твои вопросы. Это путешествие в самого себя. И неважно, происходит ли это вовне или в твоем разуме - это твой сон, и ты будешь в самом его центре.
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