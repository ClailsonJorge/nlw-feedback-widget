import { feedbackTypes, IFeedbackType } from "..";

import { CloseButton } from "../../CloseButton";

type IProps = {
    onFeedbackTypeChanged: (type: IFeedbackType) => void;
};

export function FeedbackType({ onFeedbackTypeChanged }: IProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, feedbackTypeMap]) => (
                    <button
                        key={feedbackTypeMap.title}
                        onClick={() =>
                            onFeedbackTypeChanged(key as IFeedbackType)
                        }
                        type="button"
                        className="bg-zinc-800 py-5 rounded-lg w-24 flex-1 flex flex-col items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none  "
                    >
                        <img
                            src={feedbackTypeMap.image.source}
                            alt={feedbackTypeMap.image.alt}
                        />
                        <span>{feedbackTypeMap.title}</span>
                    </button>
                ))}
            </div>
        </>
    );
}
