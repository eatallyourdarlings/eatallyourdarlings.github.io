function Link(el)
  el.target = string.gsub(el.target, "%.md", ".html")
  return el
end

-- where contains http, target="_blank"
-- trim all leading dots and slashes
-- trim whitespace