import styles from './TextInput.module.css';

export interface ITextInput {
  sampleTextProp: string;

}

const TextInput: React.FC<ITextInput> = ({ sampleTextProp,  }) => {
  return (
      <><><form>
            <fieldset className={styles.inputLabel}>
            <legend className={styles.labelText}>Label *</legend>
            <input type="text" value={sampleTextProp} className={styles.inputField}></input>
            </fieldset>
          </form>
      <p className={styles.bottomText}>Help Text</p>
      </><p className={styles.characterCount}>10/60</p></>

  );
};

export default TextInput;