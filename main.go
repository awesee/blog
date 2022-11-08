package main

import (
	"bytes"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"strings"
)

func main() {
	root, _ := os.Getwd()
	_ = filepath.WalkDir(root, func(path string, d fs.DirEntry, err error) error {
		dir := strings.TrimSuffix(path, ".html")
		if d.IsDir() || dir == path {
			return nil
		}
		body, _ := os.ReadFile(path)
		_ = os.WriteFile(path, bytes.ReplaceAll(body, []byte("https://blog.awesee.cn/"), []byte("/")), 0644)
		switch d.Name() {
		case "index.html", "404.html":
			return nil
		}
		target := fmt.Sprintf("%s/index.html", dir)
		_ = os.MkdirAll(dir, 0755)
		_ = os.Rename(path, target)
		return nil
	})
}
