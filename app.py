import web

render = web.template.render('templates/')

urls = (
    '/(.*)', 'start'
)

app = web.application(urls, globals())

class start:
    def GET(self, name):
        return render.start()

if __name__ == "__main__":
    app.run()
        


