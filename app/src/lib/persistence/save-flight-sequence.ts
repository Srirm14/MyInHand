/**
 * Only the latest started async save should commit baseline / fingerprint updates.
 */
export function createSaveFlightSequence() {
  let seq = 0;
  return {
    next(): number {
      seq += 1;
      return seq;
    },
    isLatest(id: number): boolean {
      return id === seq;
    },
    peek(): number {
      return seq;
    },
    reset(): void {
      seq = 0;
    },
  };
}
