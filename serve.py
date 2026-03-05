#!/usr/bin/env python3
"""Simple local server for the DSP course. Run: python3 serve.py"""
import http.server, socketserver, os, webbrowser

PORT = 8080
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args): pass  # silence request logs

print(f"DSP Course running at: http://localhost:{PORT}")
print("Press Ctrl+C to stop.\n")
webbrowser.open(f"http://localhost:{PORT}")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
