import styles from "./BoxMessage.module.scss";

import Success from "svgr/icon-success.svg";

interface Props {
    readonly onOpenBoxMessage: () => void;
}

export const BoxMessage: React.FunctionComponent<Props> = props => {
    const { onOpenBoxMessage } = props;

    return (
        <div className={styles.box_container}>
            <Success />

            <h2> Thanks for subscribing!</h2>
            <p>
                A confirmation email has been sent to ash@loremcompany.com.
                Please open it and click the button inside to confirm your
                subscription.
            </p>

            <button
                type="button"
                title="dismisss message"
                className={styles.btn_dismiss}
                onClick={onOpenBoxMessage}
            >
                Dismiss message
            </button>
        </div>
    );
};
