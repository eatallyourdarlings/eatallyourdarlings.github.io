--dusty ol lua spells

-- el = HTML element
-- ext = prefix for external links (could be an array to add other protocols)
ext = 'http'

--replace .md in links with .html
--make http links external
function Link(el)
  el.target = string.gsub(el.target, '%.md', '.html')
  if (string.sub(el.target, 1, string.len(ext)) == ext) then 
    el.attr = {target='_blank'}
  end
  return el
end

function CodeBlock(el)
  --add newline to start of code block
  el.text = '\n' .. el.text
  -- if el.classes[1] == 'tab' then 
  --make textmode tabs hidden to screen readers?
    -- el.attr = {aria-hidden = 'true'}
  -- end
  return el
end

-- function Audio(el)
--   el.attr = {preload='metadata'}
--   return el
-- end

--more wiki spells...
--remove trailing ../ from links and media
--turn links containing "../private" into normal/bold text