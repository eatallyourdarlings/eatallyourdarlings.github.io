-- el = HTML element
-- ext = prefix for external links (could be an array)
ext = 'http'

function Link(el)
  el.target = string.gsub(el.target, '%.md', '.html')
  if (string.sub(el.target, 1, string.len(ext)) == ext) then 
    el.attr = {target='_blank'}
  end
  return el
end

function CodeBlock(el)
  el.text = '\n' .. el.text
  -- if el.classes[1] == 'tab' then --make tabs hidden to screen readers for now
    -- el.attr = {aria-hidden = 'true'}
  -- end
  return el
end

-- function Audio(el)
--   el.attr = {preload='metadata'}
--   return el
-- end
--remove trailing ../ from links and media
--turn links containing private into normal text