function Link(el)
  el.target = string.gsub(el.target, "%.md", ".html")
  return el
end

--remove trailing ../ from links and media
--turn links containing private into normal text