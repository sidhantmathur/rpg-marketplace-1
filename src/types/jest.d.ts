import "@testing-library/jest-dom";
import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare global {
  namespace jest {
    interface Matchers<R = void> extends TestingLibraryMatchers<R, HTMLElement> {}
  }
}
