window.onload = function()
{
    document.querySelectorAll('.hexagon').forEach((hex) => 
    {
        hex.addEventListener('keydown', (e) => 
        {
            if (e.key === 'Enter' || e.key === ' ') 
            {
                e.preventDefault();
                hex.click();
            }
        });
    });
    
}