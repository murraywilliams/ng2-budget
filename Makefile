clean:
	rm -rf dist || exit 0

dist:
	npm run build:prod

build: dist

rebuild: clean
	make build

deploy: rebuild
	cd dist && \
	git init && \
	git config user.email "anna.kurilo21@gmail.com" && \
	git config user.name "Anna Kurylo (from CI)" && \
	echo "ng2-budget.bluebirrrrd.com" > CNAME && \
	git add . && \
	git commit -m "Deploy to gh-pages" && \
	git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1