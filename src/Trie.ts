export class Trie {
  private children: Trie[] = new Array<Trie>(26);
  private isEnd: boolean = false;
  constructor() {

  }

  insert(word: string) {
    let node: Trie = this;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      if (node.children[index] == null) {
        node.children[index] = new Trie();
      }
      node = node.children[index];
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    let node: Trie = this;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      const index = ch.charCodeAt(0) - "a".charCodeAt(0);
      if (node.children[index] == null || !node.children[index].isEnd) {
        return false;
      }
      node = node.children[index];
    }
    return node != null && node.isEnd;
  }
}