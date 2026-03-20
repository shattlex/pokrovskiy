import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export class JsonStore {
  #filepath;
  #pendingWrite;

  constructor(filepath) {
    this.#filepath = filepath;
    this.#pendingWrite = Promise.resolve();
  }

  async append(record) {
    this.#pendingWrite = this.#pendingWrite.then(async () => {
      const data = await this.#read();
      data.push(record);
      await this.#write(data);
    });

    await this.#pendingWrite;
  }

  async #read() {
    try {
      const raw = await readFile(this.#filepath, "utf8");
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  async #write(data) {
    await mkdir(path.dirname(this.#filepath), { recursive: true });
    await writeFile(this.#filepath, JSON.stringify(data, null, 2), "utf8");
  }
}
