/**
 * Abstract class representing a generic Bug.
 * Serves as the base class for specific bug types.
 */
abstract class Bug<T> {
  // The HTML paragraph element where the emoji will be rendered
  protected emojiElement: HTMLParagraphElement;
  
  // The emoji representation of the bug (generic type T)
  protected emoji!: T;

  /**
   * Initializes the bug with its corresponding DOM element.
   * @param emojiElement - The HTML paragraph element for display
   */
  constructor(emojiElement: HTMLParagraphElement) {
    this.emojiElement = emojiElement;
  }

  /**
   * Abstract method to render the bug's emoji to the DOM.
   * Must be implemented by all subclasses.
   */
  abstract render(): void;
}