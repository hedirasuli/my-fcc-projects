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

/**
 * Subclass representing a Bee.
 * Extends Bug with the generic type parameter set to string.
 */
class Bee extends Bug<string> {
  /**
   * Initializes the Bee and sets its specific emoji.
   * @param emojiElement - The HTML paragraph element for display
   */
  constructor(emojiElement: HTMLParagraphElement) {
    super(emojiElement);
    this.emoji = "🐝";
  }

  /**
   * Renders the bee emoji by updating the inner text of the target DOM element.
   */
  override render() {
    this.emojiElement.innerText = this.emoji;
  }
}

/**
 * Subclass representing a Spider.
 * Extends Bug with the generic type parameter set to string.
 */
class Spider extends Bug<string> {
  /**
   * Initializes the Spider and sets its specific emoji.
   * @param emojiElement - The HTML paragraph element for display
   */
  constructor(emojiElement: HTMLParagraphElement) {
    super(emojiElement);
    this.emoji = "🕷️";
  }

  /**
   * Renders the spider emoji by updating the inner text of the target DOM element.
   */
  override render() {
    this.emojiElement.innerText = this.emoji;
  }
}

/**
 * Type guard to check if an EventTarget is indeed an HTMLSelectElement.
 * Helps TypeScript understand the specific type within block scopes.
 * @param element - The event target to validate
 * @returns Boolean indicating if the element is an HTMLSelectElement
 */
function isSelect(element: EventTarget | null): element is HTMLSelectElement {
  return element instanceof HTMLSelectElement;
}