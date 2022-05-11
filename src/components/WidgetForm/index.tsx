import { useState } from "react";

import bugImageUrl from "../../assets/figmojis/bug.svg";
import ideImageUrl from "../../assets/figmojis/idea.svg";
import thoughtImageUrl from "../../assets/figmojis/thought.svg";
import { CloseButton } from "../CloseButton";
import { FeedbackContent } from "./Steps/FeedbackContent";
import { FeedbackSuccess } from "./Steps/FeedbackSuccess";
import { FeedbackType } from "./Steps/FeedbackType";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto.",
        },
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideImageUrl,
            alt: "Imagem de uma lâmpada acesa.",
        },
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: "Imagem de uma núvem de pensamento.",
        },
    },
};

export type IFeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<IFeedbackType | null>(
        null
    );

    const [sentFeedback, setSentFeedback] = useState(false);

    const handleRestartFeedback = () => {
        setSentFeedback(false);
        setFeedbackType(null);
    };

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {sentFeedback && (
                <FeedbackSuccess onFeedRestartRequest={handleRestartFeedback} />
            )}

            {!sentFeedback && feedbackType && (
                <FeedbackContent
                    feedbackType={feedbackType}
                    onFeedRestartResquest={handleRestartFeedback}
                    onFeedbackSent={() => setSentFeedback(true)}
                />
            )}

            {!sentFeedback && !feedbackType && (
                <FeedbackType onFeedbackTypeChanged={setFeedbackType} />
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela{" "}
                <a
                    className="underline underline-offset-2"
                    href="www.rocketseat.com.br"
                >
                    Rocketseat
                </a>
            </footer>
        </div>
    );
}
